import React from 'react';

// TODO FAQ: How to fix ts
// @ts-ignore
export interface ListProps<ItemProps = Record<string, never>>
  extends React.HTMLProps<HTMLOListElement | HTMLUListElement | HTMLDListElement> {
  contentElementKey?: string;
  content?: ItemProps[];
  listItemTemplate?: React.FC<React.PropsWithChildren<ItemProps>>;
}

export type ListItemProps = React.HTMLProps<HTMLLIElement>;
