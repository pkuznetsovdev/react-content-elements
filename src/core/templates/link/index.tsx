import React from 'react';
import { LinkProps } from './types';
import { WithContentTemplateElementProps } from '../../content-element';
import { NavLink } from 'react-router-dom';

export const Link = ({ children, tag, ...props }: WithContentTemplateElementProps & LinkProps) => {
  const { ...navLinkProps } = props;
  // TODO FAQ: How to fix ts
  // @ts-ignore
  return <NavLink {...navLinkProps}>{navLinkProps.title || children}</NavLink>;
};
