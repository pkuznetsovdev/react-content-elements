/** START: MyElementProps */
import React from 'react';
import { MyElementName } from './my-elements';
import { MyElementConfigDefaultMap, MyElementConfigProps } from './my-element-config';
import { ContentConditionParams } from '../temp/condition';

// TODO FAQ: How to make one of props required: config by default value, or config with required attr by name, or
// children?
// Expected by error syntaxys: <CE.Text />
// Schema: Omit<AllProps, 'children' | 'config> & (
//  {children: React.ReactNode; config?: Config | DefaultConfig}
//  | {children?: React.ReactNode; config: Config | DefaultConfig}
// )

export type MyElementProps<ElementName extends MyElementName> = ContentConditionParams &
  MyElementConfigProps<ElementName> &
  React.PropsWithChildren<{
    config?: MyElementConfigProps<ElementName> | MyElementConfigDefaultMap[ElementName];
  }>;
/** END: MyElementProps */
