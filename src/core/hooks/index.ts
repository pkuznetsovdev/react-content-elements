import { MyElementName, MyElementProps } from '../types';
import { useContentConditions } from './useContentConditions';
import React from 'react';
import { validateUnreachableCode } from '../utils/validateUnreachableCode';
import { MY_ELEMENT_CONFIG_DEFAULT_VALUE_BY_NAME } from '../constants';

/** @description Returns true if element is rendered after props validation */
export function useValidateMyElementProps<ElementName extends MyElementName>(
  props: MyElementProps<ElementName>,
  myname: ElementName,
) {
  /** Case 1. Filter by WCE condition */
  const isElementValidByCondition = useContentConditions(props.contentConditions, {
    shouldSatisfyEveryCondition: props.shouldSatisfyEveryCondition,
  });

  if (!isElementValidByCondition) {
    /**  IDEAS
     * here we can track all invalid by content condition elements, f.e. Record<ElementName,
     * MyElementProps<ElementName>['contentConditions']> */
    return false;
  }

  /** Case 2. Filter by 'is minimum required content' or children in props or else... */
  const isContentInProps = getIsContentInProps(props, myname);

  if (!isContentInProps) {
    /**  IDEAS
     * here we can track all empty elements (warn in console in dev mode for developer),
     * f.e. Record<ElementName, MyElementMessages<ElementName>['noContentInPropsMessage']> */
  }

  return isContentInProps;
}

function getIsContentInProps<ElementName extends MyElementName>(
  props: MyElementProps<ElementName>,
  myname: ElementName,
) {
  const isChildrenInProps = Boolean(React.Children.toArray(props.children).length);

  const isDefaultConfig = MY_ELEMENT_CONFIG_DEFAULT_VALUE_BY_NAME[myname] === typeof props.config;

  if (isDefaultConfig) {
    return Boolean(props.config);
  }

  switch (myname) {
    case 'icon':
      return false;
    case 'block':
    case 'custom':
    case 'divider':
      return true;
    case 'button':
      // TODO FAQ: How to fix ts: isDefaultConfig & myname is text -> typeof content is string
      // @ts-ignore
      return isChildrenInProps || Boolean(props.content || props.config?.content);
    case 'text':
      return (
        isChildrenInProps ||
        Boolean(
          // TODO FAQ: How to fix ts: isDefaultConfig & myname is text -> typeof content is string
          // @ts-ignore
          props.config?.text || props.text || props.content || props.config?.content,
        )
      );
    case 'image':
      // TODO FAQ: How to fix ts
      // @ts-ignore
      return props.config?.src || props.src;
    case 'link':
      // TODO FAQ: How to fix ts
      // @ts-ignore
      return Boolean(props.config?.to || props.to);
    case 'list':
      // TODO FAQ: How to fix ts
      // @ts-ignore
      const itemTemplate = props.listItemTemplate || props.config?.listItemTemplate;
      // TODO FAQ: How to fix ts
      // @ts-ignore
      const content = props.content || props.config?.content;
      const isValidcontent = content && typeof content[0] === 'string';

      // TODO FAQ: How to fix ts
      // @ts-ignore
      return Boolean(itemTemplate || isChildrenInProps || isValidcontent);
    default:
      validateUnreachableCode(myname);
      return false;
  }
}
