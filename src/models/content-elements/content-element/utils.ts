import { CONTENT_ELEMENT_TEMPLATES_BY_NAME } from "./constants";
import { ContentElementName } from "models/content-elements/types";


export function getContentElementTemplateByName(name: ContentElementName) {
    const contentElement = CONTENT_ELEMENT_TEMPLATES_BY_NAME[name]

    return contentElement;
}