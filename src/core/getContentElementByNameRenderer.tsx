import React from 'react';
import {
  ContentElementProps,
  ContentElementName,
  ContentElementConfig,
  ContentElementTemplateProps,
  ContentElementConfigDefaultMap,
} from './content-element';
import { CONTENT_ELEMENT_CONFIG_DEFAULT_VALUE_BY_NAME, CONTENT_ELEMENTS_BY_NAME } from './content-element';
import { WithContentElementConfig } from './with-content-element-config';
import { validateUnreachableCode } from './utils';
import { useValidateContentElementProps } from './useValidateContentElementProps';

export const getContentElementByNameRenderer = <ElementName extends ContentElementName>(
  elementTemplatesByName?: Record<ElementName, React.FC<ContentElementProps<ElementName>>>,
) => {
  const elementTemplatesByNameWithDefaultValues = {
    ...CONTENT_ELEMENTS_BY_NAME,
    ...elementTemplatesByName,
  };

  return (contentElementName: ElementName) => {
    return (props: ContentElementProps<ElementName>) => {
      const isContentElementPropsValid = useValidateContentElementProps(props, contentElementName);

      if (!isContentElementPropsValid) {
        return null;
      }

      const ContentElementTemplate = elementTemplatesByNameWithDefaultValues[contentElementName] as React.FC<
        ContentElementTemplateProps<ElementName>
      >;

      if (!ContentElementTemplate) {
        return null;
      }

      const contentElementConfig = getConfigByValidatedProps(props, contentElementName);

      return WithContentElementConfig(ContentElementTemplate)(contentElementConfig);
    };
  };
};

function getConfigByValidatedProps<ElementName extends ContentElementName>(
  props: ContentElementProps<ElementName>,
  contentElementName: ElementName,
): ContentElementConfig<ElementName> {
  return getContentElementConfigFromProps(props, contentElementName);
}

function getContentElementConfigFromProps<ElementName extends ContentElementName>(
  props: ContentElementProps<ElementName>,
  contentElementName: ElementName,
) {
  const isDefaultConfig = CONTENT_ELEMENT_CONFIG_DEFAULT_VALUE_BY_NAME[contentElementName] === typeof props.config;

  if (isDefaultConfig) {
    return getConfigByDefaultValue(props, contentElementName);
  }

  return getContentElementConfig(props, contentElementName);
}

function getContentElementConfig<ElementName extends ContentElementName>(
  props: ContentElementProps<ElementName>,
  contentElementName: ElementName,
  customProps: Partial<ContentElementProps<ElementName>> = {},
): ContentElementConfig<ElementName> {
  const { config, ...restProps } = props;

  const configToUse = config && typeof config !== 'string' ? config : {};

  const modifiers = mergeModifiersInConfig(props, customProps);

  // TODO FAQ: How to fix ts
  // @ts-ignore
  return {
    ...restProps,
    ...configToUse,
    ...customProps,
    // TODO FAQ: How to fix ts
    // @ts-ignore
    className: `${configToUse.className ? configToUse.className : ''} ${props.className ? props.className : ''}`.trim(),
    modifiers,
    contentElementName,
  } as const;
}

function mergeModifiersInConfig<ElementName extends ContentElementName>(
  props: ContentElementProps<ElementName>,
  customProps: Partial<ContentElementProps<ElementName>> = {},
) {
  return [
    // TODO FAQ: How to fix ts
    // @ts-ignore
    ...(props.config?.modifiers || props.modifiers || []),
    ...(customProps.modifiers || []),
  ];
}

function getConfigByDefaultValue<ElementName extends ContentElementName>(
  props: ContentElementProps<ElementName>,
  contentElementName: ElementName,
): ContentElementConfig<ElementName> {
  const { config } = props;
  switch (contentElementName) {
    case 'text':
      // TODO FAQ: How to fix ts
      // @ts-ignore
      return getContentElementConfig(props, contentElementName, {
        content: config as ContentElementConfigDefaultMap[ElementName],
      });
    case 'link':
      return getContentElementConfig(props, contentElementName, {
        // TODO FAQ: How to fix ts
        // @ts-ignore
        to: config as ContentElementConfigDefaultMap[ElementName],
      });
    case 'image':
      // TODO FAQ: How to fix ts
      // @ts-ignore
      return getContentElementConfig(props, contentElementName, {
        src: config as ContentElementConfigDefaultMap[ElementName],
      });
    case 'block':
    case 'list':
      return getContentElementConfig(props, contentElementName);
    case 'button':
      // TODO FAQ: How to fix ts
      // @ts-ignore
      return getContentElementConfig(props, contentElementName, {
        content: config as ContentElementConfigDefaultMap[ElementName],
      });
    default:
      // TODO FAQ: How to fix ts
      // @ts-ignore
      validateUnreachableCode(contentElementName);
      return getContentElementConfig(props, contentElementName);
  }
}
