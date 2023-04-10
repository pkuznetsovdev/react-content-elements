import { BreakpointName, BREAKPOINTS_BY_NAME } from '../constants/breakpoints';

export type ImageSrcSet = Record<BreakpointName, (typeof BREAKPOINTS_BY_NAME)[BreakpointName]['from']>;
