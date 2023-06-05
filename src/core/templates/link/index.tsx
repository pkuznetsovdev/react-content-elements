import React from 'react';
import { LinkProps } from './types';
import { WithContentTemplateElementProps } from '../../content-element';

export const Link = ({ children, tag, ...props }: WithContentTemplateElementProps & LinkProps) => {
  const { ...navLinkProps } = props;
  // TODO FAQ: How to fix ts
  // @ts-ignore
  return <a {...navLinkProps}>{navLinkProps.title || children}</a>;
};

Link.displayName = 'CE.Link';
