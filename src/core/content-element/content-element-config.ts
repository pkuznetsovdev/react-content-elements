import {CEHTMLProps} from "../types";

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
interface ContentElementConfigBase extends Partial<{
  tag: ContentElementTag;
  modifiers: ContentElementModifiers;
  if: boolean;
  content?: string;
}> {}

export interface ContentElementConfigBaseProps extends Omit<Partial<ContentElementConfigBase>, 'modifiers'> {
  modifiers?: ContentElementConfigBase['modifiers'] | unknown[];
}

interface ContentElementConfigContentMap<
  ElementName extends ContentElementName,
> {
  text: React.PropsWithChildren<{
    text?: string | Array<string> | false | null | 0 | ContentElementConfig<ElementName>;
  }>;
  image: {
    src: string;
  };
  block: never;
  list: ListProps;
  link: LinkProps;
  divider: never;
  button: ButtonProps;
  custom: CustomProps;
}

// TODO FAQ: How to fix ts
// @ts-ignore
type ContentElementConfigContent<ElementName extends ContentElementName> =
  ContentElementConfigContentMap<ElementName>[ElementName];

export type ContentElementConfig<ElementName extends ContentElementName> = CEHTMLProps &
  ContentElementConfigBase &
  ContentElementConfigContent<ElementName> &
  ContentElementSpecialProps<ElementName>;

export type ContentElementConfigProps<ElementName extends ContentElementName> = Omit<
  ContentElementConfig<ElementName>,
  'contentElementName' | 'modifiers' | 'tag'
> &
  ContentElementConfigBaseProps;

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

export interface WithContentTemplateElementProps extends ContentElementConfigBaseProps {
}
