import React from "react";

export type CEHTMLProps<HTMLElementType = unknown> = Omit<
  React.HTMLProps<HTMLElementType>,
  "content"
>;
