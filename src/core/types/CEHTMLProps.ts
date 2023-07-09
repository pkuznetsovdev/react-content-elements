import React from "react";

export interface CEHTMLProps<HTMLElementType = any> extends Omit<React.HTMLProps<HTMLElementType>, 'content'> {}