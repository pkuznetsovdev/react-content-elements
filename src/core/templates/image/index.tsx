import React from 'react';
import { ImageProps } from './types';
import { WithContentTemplateElementProps } from '../../content-element';

export const Image = ({
  children,
  tag,
  // TODO FAQ: How to fix ts
  // @ts-ignore
  text,
  ...props
}: React.PropsWithChildren<ImageProps & WithContentTemplateElementProps>) => {

  return <img {...props} />;
};

Image.displayName = 'CE.Image';
