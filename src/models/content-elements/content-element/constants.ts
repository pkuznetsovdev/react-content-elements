import ContentElementText from "../content-element-templates/content-element-text";

export const CONTENT_ELEMENT_TEMPLATES_BY_NAME = {
    text: ContentElementText,
    icon: ContentElementText,
    button: ContentElementText,
    link: ContentElementText,
    image: ContentElementText,
    divider: ContentElementText,
    block: ContentElementText,
    list: ContentElementText,
} as const;