import { ContentElementProps, ContentElementTemplatesMap } from "./types";
import { getContentElementTag, getContentElementTemplateByName } from "./utils";
import { ContentElementName } from "models/content-elements/types";
import React from "react";

function WithContentElementProps<Name extends ContentElementName>(
  ContentElementTemplate: ContentElementTemplatesMap<Name>,
  name: Name,
  contentElementProps: Omit<ContentElementProps<Name>, "name">
) {
  const tag = getContentElementTag(name, contentElementProps);

  // const className = getCustomElementClassName(wrappedProps, { elementType });
  //
  // const rawContent = getCustomElementRawContent(wrappedProps);
  //
  // // any other magic for custom elements should be provided here, f.e. set a default tag by the 'elementType' value
  // // const tagName = props.tagName || DEFAULT_TAG_NAMES[elementType];

  return (
    // TODO: WTF??
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line
    <ContentElementTemplate
      {...contentElementProps}
      tag={tag}
      classname="content-element"
    />
  );
}

const ContentElementRenderer = <T extends ContentElementName>({
  name,
  ...contentElementProps
}: React.PropsWithChildren<ContentElementProps<T>>) => {
  const ContentElementTemplate = getContentElementTemplateByName(name);

  return WithContentElementProps(
    ContentElementTemplate,
    name,
    contentElementProps
  );
};

export default ContentElementRenderer;
