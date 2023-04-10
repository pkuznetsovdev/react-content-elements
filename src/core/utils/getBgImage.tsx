import { BREAKPOINT_NAMES, useBreakpoints } from '../constants';
import React from 'react';
import { ImageSrcSetProp } from './getSrcSet';

export const useBgBySrcSet = (srcSetConfig?: ImageSrcSetProp | string): string | undefined => {
  const [breakpointName] = useBreakpoints();

  const srcBySrcSet = React.useMemo(() => {
    if (!srcSetConfig || !breakpointName) {
      return undefined;
    }

    let srcBySrcSet;

    if (typeof srcSetConfig === 'string') {
      return srcSetConfig;
    }

    // by key
    srcBySrcSet = srcSetConfig[breakpointName];

    if (srcBySrcSet) {
      return srcBySrcSet;
    }

    // by breakpoint key above current
    const currentBreakpointIndex = BREAKPOINT_NAMES.findIndex((v) => v === breakpointName);

    for (let bpIndex = currentBreakpointIndex; bpIndex < BREAKPOINT_NAMES.length; bpIndex++) {
      srcBySrcSet = srcSetConfig[BREAKPOINT_NAMES[bpIndex]];
      if (srcBySrcSet) {
        break;
      }
    }

    if (srcBySrcSet) {
      return srcBySrcSet;
    }

    // by breakpoint key below current
    for (let bpIndex = currentBreakpointIndex; bpIndex >= 0; bpIndex--) {
      srcBySrcSet = srcSetConfig[BREAKPOINT_NAMES[bpIndex]];
      if (srcBySrcSet) {
        break;
      }
    }

    return srcBySrcSet;
  }, [breakpointName, srcSetConfig]);

  return srcBySrcSet ? `url(${srcBySrcSet})` : undefined;
};
