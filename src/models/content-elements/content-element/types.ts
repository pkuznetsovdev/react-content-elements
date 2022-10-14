import { ContentElementTextProps } from "models/content-elements/content-element-templates/content-element-text";
import {
    CONTENT_ELEMENT_BLOCK,
    CONTENT_ELEMENT_BUTTON,
    CONTENT_ELEMENT_DIVIDER,
    CONTENT_ELEMENT_ICON,
    CONTENT_ELEMENT_IMAGE,
    CONTENT_ELEMENT_LINK, CONTENT_ELEMENT_LIST,
    CONTENT_ELEMENT_TEMPLATES_BY_NAME
} from "./constants";
import { ContentElementName } from "models/content-elements/types";

interface ContentElementsByName {
    text: ContentElementTextProps,
    icon: typeof CONTENT_ELEMENT_ICON,
    button: typeof CONTENT_ELEMENT_BUTTON,
    link: typeof CONTENT_ELEMENT_LINK,
    image: typeof CONTENT_ELEMENT_IMAGE,
    divider: typeof CONTENT_ELEMENT_DIVIDER,
    block: typeof CONTENT_ELEMENT_BLOCK,
    list: typeof CONTENT_ELEMENT_LIST,
}

export type ContentElementsMap<T extends keyof ContentElementsByName> = ContentElementsByName[T];

export type ContentElement = ContentElementsByName[keyof ContentElementsByName]

export type ContentElementRendererProps<T extends ContentElementName> = {
    name: T;
}

export type ContentElementProps<T extends ContentElementName> = Partial<ContentElementsMap<T>> & ContentElementRendererProps<T>;

export type ContentElementTemplatesMap<T extends keyof typeof CONTENT_ELEMENT_TEMPLATES_BY_NAME> = typeof CONTENT_ELEMENT_TEMPLATES_BY_NAME[T];