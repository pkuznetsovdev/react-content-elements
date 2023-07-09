import React from 'react';
import {CEHTMLProps} from "../../types";

// TODO FAQ: How to fix ts
// @ts-ignore
export interface ListProps<ItemProps = Record<string, unknown>>
  extends CEHTMLProps<HTMLOListElement | HTMLUListElement | HTMLDListElement> {
  itemKey?: string;
  content?: (ItemProps | string)[];
  ItemTemplate?: React.FC<React.PropsWithChildren<ItemProps>>;
}

export type ListItemProps<ItemProps = Record<string, unknown>> = React.PropsWithChildren<ItemProps>;
