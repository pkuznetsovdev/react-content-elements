import { ContentElementProps } from "./types";
import { getContentElementTemplateByName } from "./utils";
import { ContentElementName } from "models/content-elements/types";
import React from "react";
import { WithContentElementTemplateProps } from "./hoc";

const ContentElementRenderer = <T extends ContentElementName>({
  name,
  ...contentElementProps
}: React.PropsWithChildren<ContentElementProps<T>>) => {
  const ContentElementTemplate = getContentElementTemplateByName(name);

  return WithContentElementTemplateProps(
    ContentElementTemplate,
    name,
    contentElementProps
  );
};

export default ContentElementRenderer;
