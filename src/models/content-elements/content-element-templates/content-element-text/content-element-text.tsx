import React from "react";
import { ContentElementTextProps } from "./types";
import type { FCWithChildren } from "shared/types";

// no name
const ContentElementText: FCWithChildren<ContentElementTextProps> = ({
  children,
  tag: TagName,
  className,
}) => {
  return <TagName className={className}>{children}</TagName>;
};

export default ContentElementText;
