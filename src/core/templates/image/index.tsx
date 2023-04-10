import React from 'react';
import { ImageProps } from './types';
import { WithMyTemplateElementProps } from '../../types';
import { getNativeSrcSet } from '../../utils';

export const Image = ({
  children,
  tag,
  // TODO FAQ: How to fix ts
  // @ts-ignore
  text,
  srcSet,
  ...props
}: React.PropsWithChildren<ImageProps & WithMyTemplateElementProps>) => {
  const { nativeSrcSet, sizes } = getImageNativePropsBySrcSet(srcSet);

  return <img {...props} srcSet={nativeSrcSet} sizes={sizes} />;
};

function getImageNativePropsBySrcSet(srcSet: ImageProps['srcSet']) {
  return srcSet ? getNativeSrcSet(srcSet) : { nativeSrcSet: undefined, sizes: undefined };
}
