import { ContentElementTextProps } from "src/models/content-elements/content-element-templates/content-element-text";
import {
  CONTENT_ELEMENT_BLOCK,
  CONTENT_ELEMENT_BUTTON,
  CONTENT_ELEMENT_DIVIDER,
  CONTENT_ELEMENT_ICON,
  CONTENT_ELEMENT_IMAGE,
  CONTENT_ELEMENT_LINK,
  CONTENT_ELEMENT_LIST,
  CONTENT_ELEMENT_TEMPLATES_BY_NAME,
} from "./constants";
import { CONTENT_ELEMENT_NAMES } from "../constants";

export type ContentElementIcon = {
  type: typeof CONTENT_ELEMENT_ICON.types[number];
  tag: typeof CONTENT_ELEMENT_ICON.tags[number];
  modifiers: Array<typeof CONTENT_ELEMENT_ICON.modifiers[number]>;
};
export type ContentElementButton = {
  type: typeof CONTENT_ELEMENT_BUTTON.types[number];
  tag: typeof CONTENT_ELEMENT_BUTTON.tags[number];
  modifiers: Array<typeof CONTENT_ELEMENT_BUTTON.modifiers[number]>;
};
export type ContentElementLink = {
  type: typeof CONTENT_ELEMENT_LINK.types[number];
  tag: typeof CONTENT_ELEMENT_LINK.tags[number];
  modifiers: Array<typeof CONTENT_ELEMENT_LINK.modifiers[number]>;
};
export type ContentElementImage = {
  type: typeof CONTENT_ELEMENT_IMAGE.types[number];
  tag: typeof CONTENT_ELEMENT_IMAGE.tags[number];
  modifiers: Array<typeof CONTENT_ELEMENT_IMAGE.modifiers[number]>;
};
export type ContentElementDivider = {
  type: typeof CONTENT_ELEMENT_DIVIDER.types[number];
  tag: typeof CONTENT_ELEMENT_DIVIDER.tags[number];
  modifiers: Array<typeof CONTENT_ELEMENT_DIVIDER.modifiers[number]>;
};
export type ContentElementBlock = {
  type: typeof CONTENT_ELEMENT_BLOCK.types[number];
  tag: typeof CONTENT_ELEMENT_BLOCK.tags[number];
  modifiers: Array<typeof CONTENT_ELEMENT_BLOCK.modifiers[number]>;
};
export type ContentElementList = {
  type: typeof CONTENT_ELEMENT_LIST.types[number];
  tag: typeof CONTENT_ELEMENT_LIST.tags[number];
  modifiers: Array<typeof CONTENT_ELEMENT_LIST.modifiers[number]>;
};

export type ContentElementsByName = {
  text: ContentElementTextProps;
  icon: ContentElementIcon;
  button: ContentElementButton;
  link: ContentElementLink;
  image: ContentElementImage;
  divider: ContentElementDivider;
  block: ContentElementBlock;
  list: ContentElementList;
};

export type ContentElementsMap<T extends keyof ContentElementsByName> =
  ContentElementsByName[T];

export type ContentElementName = typeof CONTENT_ELEMENT_NAMES[number];
export type ContentElementTag =
  ContentElementsByName[ContentElementName]["tag"];
export type ContentElementType =
  ContentElementsByName[ContentElementName]["type"];
export type ContentElementModifiers =
  ContentElementsByName[ContentElementName]["modifiers"];

export type ContentElementMap<T extends ContentElementName> =
  ContentElementsByName[T];

export type ContentElementRendererProps<T extends ContentElementName> = {
  name: T;
};

export type ContentElementProps<T extends ContentElementName> = Partial<
  ContentElementsMap<T>
>;

export type ContentElementTemplatesMap<
  T extends keyof typeof CONTENT_ELEMENT_TEMPLATES_BY_NAME
> = typeof CONTENT_ELEMENT_TEMPLATES_BY_NAME[T];
