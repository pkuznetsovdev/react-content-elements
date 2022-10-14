import { CONTENT_ELEMENT_NAMES } from "../constants/content-element-names";
import { CONTENT_ELEMENTS_BY_NAME } from "../content-element/constants";

export type ContentElementName = typeof CONTENT_ELEMENT_NAMES[number]

export type ContentElementTag = typeof CONTENT_ELEMENTS_BY_NAME[keyof typeof CONTENT_ELEMENTS_BY_NAME]['types'][number]