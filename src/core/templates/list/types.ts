import React from "react";
import { CEHTMLProps } from "../../types";

// TODO FAQ: How to fix ts
// @ts-ignore
export interface ListProps
  extends CEHTMLProps<HTMLOListElement | HTMLUListElement | HTMLDListElement> {
  itemKey?: string;
  ItemTemplate?: React.FC<React.PropsWithChildren>;
  content?: (string | Record<string, unknown>)[];
}

export type ListItemProps<ItemProps = Record<string, unknown>> =
  React.PropsWithChildren<ItemProps>;
