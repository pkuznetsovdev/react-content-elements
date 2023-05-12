import React from 'react';
import { ImageSrcSet } from '../../types'

export type ImageProps = React.HTMLProps<HTMLImageElement> & {
  srcSet?: ImageSrcSet;
};
