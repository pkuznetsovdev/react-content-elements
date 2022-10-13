import { ContentElementProps, ContentElement } from "./types";
import { getContentElementTemplateByName } from "./utils";
import type { FCWithChildren } from "types";
import { ContentName } from "@content-elements/types";
import { CONTENT_ELEMENTS_BY_NAME } from "./constants";

function WithContentElementProps<T extends ContentName>(
    name: T,
    Element: ContentElement<T>,
    elementProps: ContentElementsMap<T>,
) {
    return (wrappedProps: Parameters<typeof CONTENT_ELEMENTS_BY_NAME[T]>[0]) => {
        const test = wrappedProps.tag;
        // const className = getCustomElementClassName(wrappedProps, { elementType });
        //
        // const rawContent = getCustomElementRawContent(wrappedProps);
        //
        // // any other magic for custom elements should be provided here, f.e. set a default tag by the 'elementType' value
        // // const tagName = props.tagName || DEFAULT_TAG_NAMES[elementType];
        //
        return <Element {...wrappedProps} className="content-element" />;
    };
}

const ContentElementRenderer: FCWithChildren<ContentElementProps> = ({ children, name, ...contentElementProps }) => {

    const ContentElementTemplate = getContentElementTemplateByName(name);

    const ContentElement = WithContentElementProps(name, ContentElementTemplate, contentElementProps)

    return <ContentElement>{children}</ContentElement>;
};

export default ContentElementRenderer;