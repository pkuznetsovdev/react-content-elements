import React from 'react';
import { ImageProps } from './types';
import { WithContentTemplateElementProps } from '../../content-element';
import { useImageSrcBySrcSet } from '../../hooks';

export const Image = ({
  children,
  tag,
  // TODO FAQ: How to fix ts
  // @ts-ignore
  text,
  srcSet,
  src,
  ...props
}: React.PropsWithChildren<ImageProps & WithContentTemplateElementProps>) => {
  const srcBySrcSet = useImageSrcBySrcSet(srcSet, { src });

  return <img {...props} src={srcBySrcSet} />;
};
