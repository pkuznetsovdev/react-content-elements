import React from 'react';
import { DividerProps } from './types';
import { WithMyTemplateElementProps } from '../../content-element';

export const Divider = ({ className }: DividerProps & WithMyTemplateElementProps) => {
  return <hr className={className} />;
};
