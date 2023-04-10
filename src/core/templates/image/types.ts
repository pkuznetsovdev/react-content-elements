import React from 'react';
import { ImageSrcSetProp } from '../../utils';

export type ImageProps = React.HTMLProps<HTMLImageElement> & {
  srcSet?: ImageSrcSetProp;
};
