import { BreakpointName } from '../constants';

type ImageSrc = string;
export type ImageSrcSet = Partial<Record<BreakpointName, ImageSrc>>;
