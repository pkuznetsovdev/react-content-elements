import {
  CONTENT_ELEMENT_TEMPLATES_BY_NAME,
  CONTENT_ELEMENTS_BY_NAME,
} from "./constants";
import {
  ContentElementName,
  ContentElementTag,
  ContentElementProps,
} from "./types";

export function getContentElementTemplateByName<
  Name extends ContentElementName
>(name: Name) {
  const contentElementTemplate = CONTENT_ELEMENT_TEMPLATES_BY_NAME[name];

  return contentElementTemplate;
}

export function getCustomElementClassName<Name extends ContentElementName>(
  name: Name
) {
  return `content-element content-${name}`;
}

export function getContentElementTag<Name extends ContentElementName>(
  name: Name,
  contentElementProps: ContentElementProps<Name>
) {
  if (
    contentElementProps.tag &&
    checkIsTagValidByName(contentElementProps.tag, name)
  ) {
    return contentElementProps.tag;
  }

  return getDefaultTagByName(name);
}

function getDefaultTagByName<Name extends ContentElementName>(name: Name) {
  return CONTENT_ELEMENTS_BY_NAME[name]._elementSettings.DEFAULT_TAG;
}

function checkIsTagValidByName<Name extends ContentElementName>(
  tag: ContentElementTag,
  name: Name
) {
  // TODO fix: WTF?
  // Type 'string' is not assignable to type 'never'
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore-next-line
  return CONTENT_ELEMENTS_BY_NAME[name].tags.includes(tag);
}
