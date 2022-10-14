import { ContentElementProps, ContentElementTemplatesMap } from "./types";
import { getContentElementTemplateByName } from "./utils";
import { ContentElementName } from "models/content-elements/types";
import React from "react";

const DEFAULT_CONTENT_ELEMENT_TAG_BY_NAME = {
    text: 'p',
    icon: 'svg',
    button: 'button',
    link: 'link',
    image: 'image',
    divider: 'divider',
    block: 'block',
    list: 'list',
}

function WithContentElementProps<Name extends ContentElementName>(
    ContentElementTemplate: ContentElementTemplatesMap<Name>,
    name: Name,
    contentElementProps: Omit<ContentElementProps<Name>, 'name'>,
) {
    const tag = contentElementProps.tag || DEFAULT_CONTENT_ELEMENT_TAG_BY_NAME[name]

    // const className = getCustomElementClassName(wrappedProps, { elementType });
    //
    // const rawContent = getCustomElementRawContent(wrappedProps);
    //
    // // any other magic for custom elements should be provided here, f.e. set a default tag by the 'elementType' value
    // // const tagName = props.tagName || DEFAULT_TAG_NAMES[elementType];
    //

    // TODO: WTF??
    // @ts-ignore-next-line
    return <ContentElementTemplate {...contentElementProps} tag={tag} classname="content-element" />;
}

const ContentElementRenderer = <T extends ContentElementName>({
    name,
    ...contentElementProps
}: React.PropsWithChildren<ContentElementProps<T>>) => {

    const ContentElementTemplate = getContentElementTemplateByName(name);

    return WithContentElementProps(ContentElementTemplate, name, contentElementProps)
};

export default ContentElementRenderer;