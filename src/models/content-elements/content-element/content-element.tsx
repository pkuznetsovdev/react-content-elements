import { CONTENT_ELEMENT_TEMPLATES_BY_NAME } from "./constants";
import { WithContentElementTemplateProps } from "./hoc";
import { ContentElementProps } from "./types";
import React from "react";

// TODO: add dynamic generation
export const ContentElement = {
  Text: (props : ContentElementProps<"text">) =>
    WithContentElementTemplateProps(CONTENT_ELEMENT_TEMPLATES_BY_NAME["text"])(
      "text",
      props,
    ),
};
