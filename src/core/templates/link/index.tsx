import React from 'react';
import { LinkProps } from './types';
import { WithMyTemplateElementProps } from '../../types';
import { NavLink } from 'react-router-dom';

export const Link = ({ children, tag, ...props }: WithMyTemplateElementProps & LinkProps) => {
  const { ...navLinkProps } = props;
  // TODO FAQ: How to fix ts
  // @ts-ignore
  return <NavLink {...navLinkProps}>{navLinkProps.title || children}</NavLink>;
};
