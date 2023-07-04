import React from 'react';
import { TextProps } from './types';
import { WithContentTemplateElementProps } from '../../content-element';

export const Text = ({ children, tag: TagName, content, ...props }: TextProps & WithContentTemplateElementProps) => {
  if (content && typeof content === 'string') {
    return (
      // TODO: FIX TS className type
      // @ts-ignore-next-line
      <TagName {...props} dangerouslySetInnerHTML={{ __html: content }} />
    );
  }

  return (
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    <TagName {...props}>{children}</TagName>
  );
};

Text.displayName = 'CE.Text';
