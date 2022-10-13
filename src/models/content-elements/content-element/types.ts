import { ContentElementTextProps } from "models/content-elements/content-element-templates/content-element-text";
import { CONTENT_ELEMENT_TEMPLATES_BY_NAME } from "./constants";
import { ContentElementName } from "models/content-elements/types";

// START MOVE TO SEPARATE FILEs
const CONTENT_ELEMENT_ICON = {
    _elementName: 'icon',
    types: [],
    tag: ['svg'],
    modifiers: [],
} as const;

const CONTENT_ELEMENT_BUTTON = {
    _elementName: 'button',
    types: [
        'button-icon',
        'primary',
        'secondary',
        'cta',
        'sign-in',
        'reg'
    ],
    tag: [
        'button',
        'a'
    ],
    modifiers: [
        'row',
        'auto',
        'column'
    ],
} as const;

const CONTENT_ELEMENT_LINK = {
    _elementName: 'link',
    types: ['button'],
    tag: [
        'button',
        'a'
    ],
    modifiers: [],
} as const;

const CONTENT_ELEMENT_IMAGE = {
    _elementName: 'image',
    types: [],
    tag: ['image'],
    modifiers: [],
} as const;

const CONTENT_ELEMENT_DIVIDER = {
    _elementName: 'divider',
    types: [],
    tag: ['hr'],
    modifiers: [],
} as const;

const CONTENT_ELEMENT_BLOCK = {
    _elementName: 'block',
    types: [
        'banner',
        'section',
        'container'
    ],
    tag: ['hr'],
    modifiers: [],
} as const;

const CONTENT_ELEMENT_LIST = {
    _elementName: 'list',
    types: [
        'list-disk',
        'list-oredered',
        'list-grid'
    ],
    tag: [
        'ul',
        'ol'
    ],
    modifiers: [
        'row',
        'auto',
        'column'
    ],
} as const;
// END MOVE TO SEPARATE FILEs

// export const CONTENT_ELEMENTS = [
//     CONTENT_ELEMENT_TEXT,
//     CONTENT_ELEMENT_ICON,
//     CONTENT_ELEMENT_BUTTON,
//     CONTENT_ELEMENT_LINK,
//     CONTENT_ELEMENT_IMAGE,
//     CONTENT_ELEMENT_DIVIDER,
//     CONTENT_ELEMENT_BLOCK,
//     CONTENT_ELEMENT_LIST,
// ] as const;

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

export type ContentElementProps<T extends ContentElementName> = Partial<ContentElementsMap<T>> & {
    name: T
}

export type ContentElementTemplatesMap<T extends keyof typeof CONTENT_ELEMENT_TEMPLATES_BY_NAME> = typeof CONTENT_ELEMENT_TEMPLATES_BY_NAME[T];