import { MyElementModifiers, MyElementName, MyElementSpecialProps, MyElementTag } from './my-element';
import React, { HTMLProps } from 'react';
import { ListProps } from 'src/core/templates/list/types';
import { LinkProps } from 'src/core/templates/link/types';
import { ContentConditionParams } from '../temp/condition';

/** START: MyElementConfig */
type MyElementConfigBase<ElementName extends MyElementName> = Partial<{
  tag: MyElementTag<ElementName>;
  modifiers: MyElementModifiers<ElementName>;
}>;

interface MyElementCofigContentMap<
  ElementName extends MyElementName,
  ListElementTemplateProps extends Record<string, unknown> = Record<string, never>,
> {
  text: React.PropsWithChildren<{
    text?: string | Array<string> | false | null | 0 | MyElementConfig<ElementName>;
  }>;
  image: {
    src: string;
  };
  block: never;
  list: ListProps<ListElementTemplateProps>;
  link: LinkProps;
}

// TODO FAQ: How to fix ts
// @ts-ignore
type MyElementCofigContent<ElementName extends MyElementName> = MyElementCofigContentMap<ElementName>[ElementName];

export type MyElementConfig<ElementName extends MyElementName> = HTMLProps<any> &
  MyElementConfigBase<ElementName> &
  MyElementCofigContent<ElementName> &
  ContentConditionParams &
  MyElementSpecialProps<ElementName>;

export type MyElementConfigProps<ElementName extends MyElementName> = Omit<MyElementConfig<ElementName>, 'myname'>;

// TODO FAQ: How to fix ts
// @ts-ignore
export interface MyElementConfigDefaultMap extends Record<MyElementName, unknown> {
  text?: string;
  image?: string;
  block?: never;
  list?: never;
  link?: string;
  button?: never;
  custom?: unknown;
  divider?: never;
  icon?: string;
}

/** END: MyElementConfig */
