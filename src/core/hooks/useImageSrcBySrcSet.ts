import React from 'react';
import { BREAKPOINT_NAMES } from '../constants';
import { useBreakpoints } from './useBreakpoints';
import { ImageSrcSet } from '../types';

export const useImageSrcBySrcSet = (
  srcSet?: ImageSrcSet | string,
  config: {
    src?: string;
    isBg?: boolean;
  } = {},
): string | undefined => {
  const [breakpointName] = useBreakpoints();
  const { src, isBg } = config;

  const srcBySrcSet = React.useMemo(() => {
    if (!srcSet || !breakpointName) {
      return undefined;
    }

    let srcBySrcSet;

    if (typeof srcSet === 'string') {
      return srcSet;
    }

    // by key
    srcBySrcSet = srcSet[breakpointName];

    if (srcBySrcSet) {
      return srcBySrcSet;
    }

    // by breakpoint key above current
    const currentBreakpointIndex = BREAKPOINT_NAMES.findIndex((v) => v === breakpointName);

    for (let bpIndex = currentBreakpointIndex; bpIndex < BREAKPOINT_NAMES.length; bpIndex++) {
      srcBySrcSet = srcSet[BREAKPOINT_NAMES[bpIndex]];
      if (srcBySrcSet) {
        break;
      }
    }

    return srcBySrcSet;
  }, [breakpointName, srcSet]);

  if (srcBySrcSet) {
    return isBg ? `url(${srcBySrcSet})` : srcBySrcSet;
  }

  if (src) {
    return isBg ? `url(${src})` : src;
  }
};
