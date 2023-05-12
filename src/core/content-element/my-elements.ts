import { Text, Image, Block, List, Link, Divider, Button, Custom, Icon } from '../templates';

export const MY_ELEMENTS_BY_NAME = {
  text: Text,
  image: Image,
  block: Block,
  list: List,
  link: Link,
  divider: Divider,
  button: Button,
  icon: Icon,
  custom: Custom,
} as const;

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
