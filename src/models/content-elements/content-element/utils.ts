import { CONTENT_ELEMENT_TEMPLATES_BY_NAME, CONTENT_ELEMENTS_BY_NAME } from "./constants";
import { ContentElementName, ContentElementTag } from "models/content-elements/types";
import { ContentElementProps, ContentElementRendererProps } from "./types";


export function getContentElementTemplateByName<Name extends ContentElementName>(name: Name) {
    const contentElementTemplate = CONTENT_ELEMENT_TEMPLATES_BY_NAME[name];

    return contentElementTemplate;
}

export function getContentElementTag<Name extends ContentElementName>(
    name: Name,
    contentElementProps: Omit<ContentElementProps<Name>, 'name'>,
)
{
    if (contentElementProps.tag && checkIsTagValidByName(contentElementProps.tag, name)) {

    }

    return getDefaultTagByName(name);
}

function getDefaultTagByName<Name extends ContentElementName>(name: Name) {
    return CONTENT_ELEMENTS_BY_NAME[name]._elementSettings.DEFAULT_TAG
}

function checkIsTagValidByName<Name extends ContentElementName>(tag: ContentElementTag, name: Name) {
    return CONTENT_ELEMENTS_BY_NAME[name].types.includes(tag);
}