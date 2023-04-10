import React from 'react';
import { BlockProps } from './types';
import { WithMyTemplateElementProps } from '../../types';
import { useBgBySrcSet } from '../../utils';

export const Block = ({
  children,
  tag: TagName,
  backgroundImage,
  content,
  ...props
}: BlockProps & WithMyTemplateElementProps) => {
  const backgroundImageUrl = useBgBySrcSet(backgroundImage);

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
