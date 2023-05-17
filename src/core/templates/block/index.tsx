import React from 'react';
import { BlockProps } from './types';
import { WithContentTemplateElementProps } from '../../content-element';
import { useImageSrcBySrcSet } from '../../hooks';

export const Block = ({
  children,
  tag: TagName,
  bgSrcSet,
  bgSrc,
  content,
  ...props
}: BlockProps & WithContentTemplateElementProps) => {
  const backgroundImage = useImageSrcBySrcSet(bgSrcSet, { src: bgSrc, isBg: true });

  const style = {
    ...(backgroundImage ? { backgroundImage } : {}),
  };

  return (
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    <TagName {...props} style={{ ...(props.style ? props.style : {}), ...style }}>
      {children}
    </TagName>
  );
};
