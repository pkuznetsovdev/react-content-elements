import React from 'react';
import { BlockProps } from './types';
import { WithMyTemplateElementProps } from '../../content-element';
import { useImageSrcBySrcSet } from '../../hooks';

export const Block = ({
  children,
  tag: TagName,
  bgSrcSet,
  bgSrc,
  content,
  ...props
}: BlockProps & WithMyTemplateElementProps) => {
  const backgroundImageUrl = useImageSrcBySrcSet(bgSrcSet, { src: bgSrc, isBg: true});

  const style = {
    ...(backgroundImageUrl ? { backgroundImage: backgroundImageUrl } : {}),
  };

  return (
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    <TagName {...props} style={{ ...style, ...(props.style ? props.style : {}) }}>
      {children}
    </TagName>
  );
};
