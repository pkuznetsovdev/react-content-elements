import React from 'react';

export interface CustomProps extends React.HTMLProps<unknown> {
  CustomTemplate: React.FC<React.PropsWithChildren>;
}
