import React from 'react';
import { CustomProps } from './types';
import { WithContentTemplateElementProps } from '../../content-element';

export const Custom = ({ CustomTemplate, ...props }: CustomProps & WithContentTemplateElementProps) => {
  return <CustomTemplate {...props} />;
};

Custom.displayName = 'CE.Custom';
