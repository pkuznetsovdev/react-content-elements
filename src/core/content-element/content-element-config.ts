export const CONTENT_ELEMENT_CONFIG_DEFAULT_VALUE_BY_NAME = {
  text: 'string',
  image: 'string',
  link: 'string',
} as Record<ContentElementName, unknown>;
import {
  ContentElementModifiers,
  ContentElementName,
  ContentElementSpecialProps,
  ContentElementTag,
} from './content-elements';
import React, { HTMLProps } from 'react';
import { ListProps } from '../templates/list/types';
import { LinkProps } from '../templates/link/types';
import { ButtonProps } from '../templates/button/types';
import { CustomProps } from '../templates/custom/types';

/** START: ContentElementConfig */
type ContentElementConfigBase<ElementName extends ContentElementName> = Partial<{
  tag: ContentElementTag;
  modifiers: ContentElementModifiers;
}>;

type ContentElementConfigBaseProps<ElementName extends ContentElementName> = Partial<{
  tag: ContentElementTag;
  modifiers: ContentElementModifiers | unknown[];
}>;

interface ContentElementCofigContentMap<
  ElementName extends ContentElementName,
  ListElementTemplateProps extends Record<string, unknown> = Record<string, never>,
> {
  text: React.PropsWithChildren<{
    text?: string | Array<string> | false | null | 0 | ContentElementConfig<ElementName>;
  }>;
  image: {
    src: string;
  };
  block: never;
  list: ListProps<ListElementTemplateProps>;
  link: LinkProps;
  divider: never;
  button: ButtonProps;
  custom: CustomProps;
}

// TODO FAQ: How to fix ts
// @ts-ignore
type ContentElementCofigContent<ElementName extends ContentElementName> =
  ContentElementCofigContentMap<ElementName>[ElementName];

export type ContentElementConfig<ElementName extends ContentElementName> = HTMLProps<any> &
  ContentElementConfigBase<ElementName> &
  ContentElementCofigContent<ElementName> &
  ContentElementSpecialProps<ElementName>;

export type ContentElementConfigProps<ElementName extends ContentElementName> = Omit<
  ContentElementConfig<ElementName>,
  'contentElementName' | 'modifiers' | 'tag'
> &
  ContentElementConfigBaseProps<ElementName>;

export interface ContentElementConfigDefaultMap extends Partial<Record<ContentElementName, unknown>> {
  text?: string;
  image?: string;
  block?: never;
  list?: never;
  link?: string;
  button?: never;
  custom?: unknown;
  divider?: never;
}

/** END: ContentElementConfig */
