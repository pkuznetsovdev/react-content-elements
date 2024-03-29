import React from "react";
import { LinkProps } from "./types";
import { WithContentTemplateElementProps } from "../../content-element";

export const Link = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tag,
  ...props
}: WithContentTemplateElementProps & LinkProps) => {
  const { ...linkProps } = props;
  // TODO FAQ: How to fix ts
  // @ts-ignore
  return <a {...linkProps}>{linkProps.title || children}</a>;
};

Link.displayName = "CE.Link";
