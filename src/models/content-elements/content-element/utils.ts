import { ContentElementProps } from "./types";
import { CONTENT_ELEMENTS_BY_NAME } from "./constants";


export function getContentElementTemplateByName(name: ContentElementProps['name']) {
    const contentElement = CONTENT_ELEMENTS_BY_NAME[name]
    return contentElement;
}