import React from 'react';
import { IconProps } from './types';
import { WithMyTemplateElementProps } from '../../types';

export const Icon = ({ children, tag, name, ...props }: IconProps & WithMyTemplateElementProps) => {
  return null;
  // return (
  // <TagName
  //   {...props}
  //   style={{ ...style, ...(props.style ? props.style : {}) }}
  // >
  //   {children}
  // </TagName>
  // );
};
