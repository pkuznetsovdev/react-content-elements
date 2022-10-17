import ContentElementText, {
  CONTENT_ELEMENT_TEXT,
} from "../content-element-templates/content-element-text";
// START MOVE TO SEPARATE FILEs

export const CONTENT_ELEMENT_ICON = {
  _elementName: "icon",
  _elementSettings: {
    DEFAULT_TAG: "svg",
  },
  types: [],
  tags: ["svg"],
  modifiers: [],
} as const;

export const CONTENT_ELEMENT_BUTTON = {
  _elementName: "button",
  _elementSettings: {
    DEFAULT_TAG: "button",
  },
  types: ["button-icon", "primary", "secondary", "cta", "sign-in", "reg"],
  tags: ["button", "a"],
  modifiers: ["row", "auto", "column"],
} as const;

export const CONTENT_ELEMENT_LINK = {
  _elementName: "link",
  _elementSettings: {
    DEFAULT_TAG: "a",
  },
  types: ["button"],
  tags: ["a", "button"],
  modifiers: [],
} as const;

export const CONTENT_ELEMENT_IMAGE = {
  _elementName: "image",
  _elementSettings: {
    DEFAULT_TAG: "image",
  },
  types: [],
  tags: ["image"],
  modifiers: [],
} as const;

export const CONTENT_ELEMENT_DIVIDER = {
  _elementName: "divider",
  _elementSettings: {
    DEFAULT_TAG: "hr",
  },
  types: [],
  tags: ["hr"],
  modifiers: [],
} as const;

export const CONTENT_ELEMENT_BLOCK = {
  _elementName: "block",
  _elementSettings: {
    DEFAULT_TAG: "div",
  },
  types: ["banner", "section", "container"],
  tags: ["div", "section", "article"],
  modifiers: [],
} as const;

export const CONTENT_ELEMENT_LIST = (() => {
  const types = ["list-disk", "list-oredered", "list-grid"] as const;
  const tags = ["ul", "ol"] as const;
  const modifiers = ["row", "auto", "column"] as const;

  return {
    _elementName: "list",
    _elementSettings: {
      DEFAULT_TAG: tags[0],
    },
    types,
    tags,
    modifiers,
  };
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
