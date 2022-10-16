import {
  ContentElementProps,
  ContentElementName,
  ContentElementRendererProps,
} from "./types";
import { getContentElementTemplateByName } from "./utils";
import React from "react";
import { WithContentElementTemplateProps } from "./hoc";

export const ContentElementRenderer = <T extends ContentElementName>({
  name,
  ...contentElementProps
}: React.PropsWithChildren<
  ContentElementProps<T> & ContentElementRendererProps<T>
>) => {
  const ContentElementTemplate = getContentElementTemplateByName(name);

  return WithContentElementTemplateProps(ContentElementTemplate)(
    name,
    // TODO: WTF?
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line
    contentElementProps
  );
};
