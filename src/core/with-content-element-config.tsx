import React from 'react';
import type {CustomConfig, ContentElementConfig, ContentElementName, ContentElementTemplateProps} from './content-element';
import { getContentElementTemplatePropsByConfig } from './content-element';

export const WithContentElementConfig =
  <ElementName extends ContentElementName, ElementConfig extends ContentElementConfig<ElementName>>(
    ContentElementTemplate: React.FC<ContentElementTemplateProps<ElementName>>,
  ) =>
  (contentElementConfig: Omit<ElementConfig, 'if'>, customConfig: CustomConfig) => {
    const contentElementTemplateProps = getContentElementTemplatePropsByConfig(contentElementConfig, customConfig);

    return <ContentElementTemplate {...contentElementTemplateProps} />;
  };
