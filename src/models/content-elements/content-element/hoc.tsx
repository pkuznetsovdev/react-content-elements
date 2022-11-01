import {
  ContentElementProps,
  ContentElementTemplatesMap,
  ContentElementName,
} from "./types";
import { getContentElementTag, getContentElementClassName } from "./utils";
import React from "react";

export function WithContentElementTemplateProps<
  Name extends ContentElementName
>(ContentElementTemplate: ContentElementTemplatesMap<Name>) {
  return (name: Name, contentElementProps: ContentElementProps<Name>) => {
    console.log('process.env.NODE_ENV :', process.env.NODE_ENV);
    const contentElementTemplateProps = {
      tag: getContentElementTag(name, contentElementProps),
      className: getContentElementClassName(name),
    };

    return (
      // TODO: WTF??
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      <ContentElementTemplate
        {...contentElementProps}
        {...contentElementTemplateProps}
      />
    );
  };
}
