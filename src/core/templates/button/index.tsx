import React from 'react';
import { ButtonProps } from './types';
import { WithContentTemplateElementProps } from '../../content-element';

export const Button = ({
  tag,
  content,
  children,
  type = 'button',
  ...props
}: ButtonProps & WithContentTemplateElementProps) => {
  if (content && typeof content === 'string') {
    // TODO FAQ: How to fix ts
    // @ts-ignore
    return <button {...props} type={type} dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return (
    // TODO FAQ: How to fix ts
    // @ts-ignore
    <button {...props} type={type}>
      {children}
    </button>
  );
};
