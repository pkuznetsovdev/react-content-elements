import React from 'react';
import type { ContentElementConfig, ContentElementName, ContentElementTemplateProps } from './content-element';
import { getContentElementTemplatePropsByConfig } from './content-element';

export const WithContentElementConfig =
  <ElementName extends ContentElementName, ElementConfig extends ContentElementConfig<ElementName>>(
    ContentElementTemplate: React.FC<ContentElementTemplateProps<ElementName>>,
  ) =>
      (contentElementConfig: Omit<ElementConfig, 'if'>) => {
    const contentElementTemplateProps = getContentElementTemplatePropsByConfig(contentElementConfig);
    if (contentElementConfig.contentElementName === 'text' && Array.isArray(contentElementConfig.content)) {
      return (
        <>
          {contentElementConfig.content.map((elementContent, idx) => (
            // TODO: FAQ HOW TO FIX?
            // @ts-ignore
            <ContentElementTemplate key={idx} {...contentElementTemplateProps} content={elementContent} />
          ))}
        </>
      );
    }

    //some magic with props
    // if image
    // const nativeSrcProps = getImageNativePropsSrcPropsByConfigSrc(contentElementConfig.src) *remove from Image template
    // return <ContentElementTemplate {...contentElementTemplateProps} {...nativeSrcProps}/>;

    return <ContentElementTemplate {...contentElementTemplateProps} />;
  };
