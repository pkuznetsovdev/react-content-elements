import { MY_ELEMENTS_BY_NAME } from '../constants/my-elements';

type MyElementTemplatePropsMap = typeof MY_ELEMENTS_BY_NAME;

export type MyElementName = keyof MyElementTemplatePropsMap;
export type MyElementTag<ElementName extends MyElementName> = keyof HTMLElementTagNameMap;
export type MyElementModifiers<ElementName extends MyElementName> = string[];

export type MyElementTemplateProps<ElementName extends MyElementName> = Parameters<
  MyElementTemplatePropsMap[ElementName]
>[0];

export type MyElementSpecialProps<ElementName extends MyElementName> = {
  myname: ElementName;
};
