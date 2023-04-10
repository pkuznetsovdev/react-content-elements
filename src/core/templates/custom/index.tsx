import React from 'react';
import { CustomProps } from './types';
import { WithMyTemplateElementProps } from '../../types';

export const Custom = ({
  CustomTemplate,
  // TODO FAQ: How to fix ts
  // @ts-ignore
  customName,
  // TODO FAQ: How to fix ts
  // @ts-ignore
  myname,
  // TODO FAQ: How to fix ts
  // @ts-ignore
  modifiers,
  // TODO FAQ: How to fix ts
  // @ts-ignore
  contentConditions,
  ...props
}: CustomProps & WithMyTemplateElementProps) => {
  return <CustomTemplate {...props} />;
};
