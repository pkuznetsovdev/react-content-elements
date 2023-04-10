import React from 'react';
import { DividerProps } from './types';
import { WithMyTemplateElementProps } from '../../types';

export const Divider = ({ className }: DividerProps & WithMyTemplateElementProps) => {
  return <hr className={className} />;
};
