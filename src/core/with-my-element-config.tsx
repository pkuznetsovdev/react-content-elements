import React from 'react';
import { MyElementConfig, MyElementName, MyElementTemplateProps } from './types';
import { getMyElementTemplatePropsByConfig } from './utils';

export const WithMyElementConfig =
  <ElementName extends MyElementName, ElementConfig extends MyElementConfig<ElementName>>(
    MyElementTemplate: React.FC<MyElementTemplateProps<ElementName>>,
  ) =>
  (myElementConfig: ElementConfig) => {
    const myElementTemplateProps = getMyElementTemplatePropsByConfig(myElementConfig);
    if (myElementConfig.myname === 'text' && Array.isArray(myElementConfig.content)) {
      return (
        <>
          {myElementConfig.content.map((elementContent, idx) => (
            <MyElementTemplate key={idx} {...myElementTemplateProps} content={elementContent} />
          ))}
        </>
      );
    }

    //some magic with props
    // if image
    // const nativeSrcProps = getImageNativePropsSrcPropsByConfigSrc(myElementConfig.src) *remove from Image template
    // return <MyElementTemplate {...myElementTemplateProps} {...nativeSrcProps}/>;

    return <MyElementTemplate {...myElementTemplateProps} />;
  };
