import React from 'react';
import {
  ContentElementProps,
  ContentElementName,
  ContentElementConfig,
  ContentElementTemplateProps,
  ContentElementConfigDefaultMap, CustomConfig, ContentElementTag, ContentElementModifiers,
} from './content-element';
import { CONTENT_ELEMENT_CONFIG_DEFAULT_VALUE_BY_NAME, CONTENT_ELEMENTS_BY_NAME } from './content-element';
import { WithContentElementConfig } from './with-content-element-config';
import { validateUnreachableCode } from './utils';
import {ContentElementProps1} from "./types";

export const getContentElementByNameRenderer = <ElementName extends ContentElementName>(
    customConfig: CustomConfig = {}
) => {
  const elementTemplatesByNameWithDefaultValues = {
    ...CONTENT_ELEMENTS_BY_NAME,
    // ...(customConfig?.customElements || {}),
  };

  return (contentElementName: ElementName) => {
    return (props: ContentElementProps1<ElementName>) => {
      if ((Object.hasOwn(props, 'if') && !Boolean(props.if))) {
        return null;
      }

      const { if: renameReservedWordIf, ...propsWithoutCEIf } = props;


      const ContentElementTemplate = elementTemplatesByNameWithDefaultValues[contentElementName] as React.FC<
          ContentElementTemplateProps<ElementName>
      >;

      if (!ContentElementTemplate) {
        return null;
      }

      const contentElementConfig = getConfigByValidatedProps(propsWithoutCEIf, contentElementName);

      // TODO: FAQ HOW TO FIX?
      // @ts-ignore
      return WithContentElementConfig(ContentElementTemplate)(contentElementConfig, customConfig);
    };
  };
};

function getConfigByValidatedProps<ElementName extends ContentElementName>(
  props: Omit<ContentElementProps1<ElementName>, 'if'>,
  contentElementName: ElementName,
): Omit<ContentElementProps1<ElementName>, 'if'> {
  return getContentElementConfigFromProps(props, contentElementName);
}

function getContentElementConfigFromProps<ElementName extends ContentElementName>(
  props: Omit<ContentElementProps1<ElementName>, 'if'>,
  contentElementName: ElementName,
) {
  // const isDefaultConfig = CONTENT_ELEMENT_CONFIG_DEFAULT_VALUE_BY_NAME[contentElementName] === typeof props.config;
  //
  // if (isDefaultConfig) {
  //   return getConfigByDefaultValue(props, contentElementName);
  // }

  return getContentElementConfig(props, contentElementName);
}

function getContentElementConfig<ElementName extends ContentElementName>(
  props: Omit<ContentElementProps1<ElementName>, 'if'>,
  contentElementName: ElementName,
  customProps: Partial<ContentElementProps1<ElementName>> = {},
): Omit<ContentElementProps1<ElementName>, 'if'> {
  const { config, ...restProps } = props;

  const modifiers = mergeModifiersInConfig(props, customProps);
  const className = config?.className || props.className || '';

  // TODO FAQ: How to fix ts
  // @ts-ignore
  return {
    ...restProps,
    ...config,
    ...customProps,
    className,
    modifiers,
    contentElementName,
  } as const;
}

function mergeModifiersInConfig<ElementName extends ContentElementName>(
  props: Omit<ContentElementProps1<ElementName>, 'if'>,
  customProps: Partial<ContentElementProps1<ElementName>> = {},
): string[] {
  return [
    // TODO FAQ: How to fix ts
    // @ts-ignore
    ...(props.config?.modifiers || props.modifiers || []),
    ...(customProps.modifiers || []),
  ].filter((m) => m && typeof m === 'string') as string[];
}

// function getConfigByDefaultValue<ElementName extends ContentElementName>(
//   props: Omit<ContentElementProps1<ElementName>, 'if'>,
//   contentElementName: ElementName,
// ): Omit<ContentElementProps1<ElementName>, 'if'> {
//   const { config } = props;
//   switch (contentElementName) {
//     case 'text':
//       // TODO FAQ: How to fix ts
//       // @ts-ignore
//       return getContentElementConfig(props, contentElementName, {
//         content: config as ContentElementConfigDefaultMap[ElementName],
//       });
//     case 'link':
//       return getContentElementConfig(props, contentElementName, {
//         // TODO FAQ: How to fix ts
//         // @ts-ignore
//         to: config as ContentElementConfigDefaultMap[ElementName],
//       });
//     case 'image':
//       // TODO FAQ: How to fix ts
//       // @ts-ignore
//       return getContentElementConfig(props, contentElementName, {
//         src: config as ContentElementConfigDefaultMap[ElementName],
//       });
//     case 'block':
//     case 'list':
//       return getContentElementConfig(props, contentElementName);
//     case 'button':
//       // TODO FAQ: How to fix ts
//       // @ts-ignore
//       return getContentElementConfig(props, contentElementName, {
//         content: config as ContentElementConfigDefaultMap[ElementName],
//       });
//     default:
//       // TODO FAQ: How to fix ts
//       // @ts-ignore
//       validateUnreachableCode(contentElementName);
//       return getContentElementConfig(props, contentElementName);
//   }
// }
