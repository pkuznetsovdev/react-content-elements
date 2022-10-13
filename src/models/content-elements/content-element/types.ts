import { CONTENT_ELEMENTS_BY_NAME } from "@content-elements/content-element/constants";
import { ContentElementName } from "@content-elements/types";

export type ContentElementsMap = typeof CONTENT_ELEMENTS_BY_NAME;

export type ContentElement<T extends ContentElementName> = ContentElementsMap[T];

export type ContentElementProps<T extends ContentElementName> = {
    name: T,
    tag?: ContentElementsMap<T>['tag'];
    modifiers?: ContentElementsMap<T>['modifiers'];
}