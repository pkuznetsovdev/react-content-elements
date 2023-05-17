/** START: ContentElementProps */
import React from 'react';
import { ContentElementName } from './content-elements';
import { ContentElementConfigDefaultMap, ContentElementConfigProps } from './content-element-config';
import { ContentConditionParams } from '../temp/condition';

// TODO FAQ: How to make one of props required: config by default value, or config with required attr by name, or
// children?
// Expected by error syntaxys: <CE.Text />
// Schema: Omit<AllProps, 'children' | 'config> & (
//  {children: React.ReactNode; config?: Config | DefaultConfig}
//  | {children?: React.ReactNode; config: Config | DefaultConfig}
// )

export type ContentElementProps<ElementName extends ContentElementName> = ContentConditionParams &
  ContentElementConfigProps<ElementName> &
  React.PropsWithChildren<{
    config?: ContentElementConfigProps<ElementName> | ContentElementConfigDefaultMap[ElementName];
  }>;
/** END: ContentElementProps */
