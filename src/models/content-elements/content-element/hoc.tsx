import { ContentElementProps, ContentElementTemplatesMap } from "./types";
import { getContentElementTag } from "./utils";
import { ContentElementName } from "models/content-elements/types";
import React from "react";

export function WithContentElementTemplateProps<Name extends ContentElementName>(
  ContentElementTemplate: ContentElementTemplatesMap<Name>,
  name: Name,
  contentElementProps: Omit<ContentElementProps<Name>, "name">
) {
  const contentElementTemplateProps = {
    tag: getContentElementTag(name, contentElementProps),
    className: "content-element", // getCustomElementClassName(wrappedProps, { elementType });
  }

  return (
    // TODO: WTF??
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line
    <ContentElementTemplate
      {...contentElementProps}
      {...contentElementTemplateProps}
    />
  );
}