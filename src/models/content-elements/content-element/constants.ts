import ContentElementText, { CONTENT_ELEMENT_TEXT } from "../content-element-templates/content-element-text";

// START MOVE TO SEPARATE FILEs
export const CONTENT_ELEMENT_ICON = {
    _elementName: 'icon',
    _elementSettings: {
        DEFAULT_TAG: 'svg',
    },
    types: [],
    tag: [
        'svg',
    ],
    modifiers: [],
} as const;

export type ContentElementIcon = {
    types: typeof CONTENT_ELEMENT_ICON.types[number], tag: typeof CONTENT_ELEMENT_ICON.tag[number], modifiers: typeof CONTENT_ELEMENT_ICON.modifiers[number],
}

export const CONTENT_ELEMENT_BUTTON = {
    _elementName: 'button',
    _elementSettings: {
        DEFAULT_TAG: 'button',
    },
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

export type ContentElementButton = {
    types: typeof CONTENT_ELEMENT_BUTTON.types[number], tag: typeof CONTENT_ELEMENT_BUTTON.tag[number], modifiers: typeof CONTENT_ELEMENT_BUTTON.modifiers[number],
}

export const CONTENT_ELEMENT_LINK = {
    _elementName: 'link',
    _elementSettings: {
        DEFAULT_TAG: 'a',
    },
    types: ['button'],
    tag: [
        'a',
        'button'
    ],
    modifiers: [],
} as const;

export const CONTENT_ELEMENT_IMAGE = {
    _elementName: 'image',
    _elementSettings: {
        DEFAULT_TAG: 'image',
    },
    types: [],
    tag: ['image'],
    modifiers: [],
} as const;

export const CONTENT_ELEMENT_DIVIDER = {
    _elementName: 'divider',
    _elementSettings: {
        DEFAULT_TAG: 'hr',
    },
    types: [],
    tag: ['hr'],
    modifiers: [],
} as const;

export const CONTENT_ELEMENT_BLOCK = {
    _elementName: 'block',
    _elementSettings: {
        DEFAULT_TAG: 'div',
    },
    types: [
        'banner',
        'section',
        'container'
    ],
    tag: [
        'div',
        'section',
        'article'
    ],
    modifiers: [],
} as const;

export const CONTENT_ELEMENT_LIST = (() => {
    const types = [
        'list-disk',
        'list-oredered',
        'list-grid'
    ];
    const tag = [
        'ul',
        'ol'
    ];
    const modifiers = [
        'row',
        'auto',
        'column'
    ];
    return {
        _elementName: 'list',
        _elementSettings: {
            DEFAULT_TAG: tag[0],
        },
        types,
        tag,
        modifiers,
    }
})();

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
// END MOVE TO SEPARATE FILEs

export const CONTENT_ELEMENTS_BY_NAME = {
    text: CONTENT_ELEMENT_TEXT,
    icon: CONTENT_ELEMENT_ICON,
    button: CONTENT_ELEMENT_BUTTON,
    link: CONTENT_ELEMENT_LINK,
    image: CONTENT_ELEMENT_IMAGE,
    divider: CONTENT_ELEMENT_DIVIDER,
    block: CONTENT_ELEMENT_BLOCK,
    list: CONTENT_ELEMENT_LIST,
} as const;

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