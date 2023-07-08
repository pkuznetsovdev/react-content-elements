import { Text, Image, Block, List, Link, Divider, Button, Custom } from '../templates';

export const CONTENT_ELEMENTS_BY_NAME = {
  text: Text,
  image: Image,
  block: Block,
  list: List,
  link: Link,
  divider: Divider,
  button: Button,
  custom: Custom,
} as const;

type ContentElementTemplatePropsMap = typeof CONTENT_ELEMENTS_BY_NAME;

export type ContentElementName = keyof ContentElementTemplatePropsMap;
export type ContentElementTag = keyof HTMLElementTagNameMap;
export type ContentElementModifiers = string[];

export type ContentElementTemplateProps<ElementName extends ContentElementName> = Parameters<
  ContentElementTemplatePropsMap[ElementName]
>[0];

export type ContentElementSpecialProps<ElementName extends ContentElementName> = {
  contentElementName: ElementName;
};
export interface CustomConfig extends Partial<{
  tags: Partial<{
    byName: Record<ContentElementName, keyof HTMLElementTagNameMap>,
    byModifier: Record<string, keyof HTMLElementTagNameMap>,
  }>,
  customElements: {},
}> {}
