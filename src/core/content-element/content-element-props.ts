/** START: ContentElementProps */
import React from 'react';
import { ContentElementName } from './content-elements';
import { ContentElementConfigDefaultMap, ContentElementConfigProps } from './content-element-config';

export type ContentElementProps<ElementName extends ContentElementName> = ContentElementConfigProps<ElementName> &
  React.PropsWithChildren<{
    config?: ContentElementConfigProps<ElementName> | ContentElementConfigDefaultMap[ElementName];
  }>;
/** END: ContentElementProps */
