import { BreakpointName, BREAKPOINTS_BY_NAME } from '../constants';
import { STRING_LITERALS } from '../../utils';

export type ImageSrcSetProp = Record<BreakpointName, string>;

const IMAGE_SRC_SET = Object.entries(BREAKPOINTS_BY_NAME).reduce(
  (res, [name, { from }]) => ({ ...res, [name]: from }),
  {},
);

export function getNativeSrcSet(srcSet: ImageSrcSetProp) {
  const nativeSrcSet = Object.entries<string>(srcSet)
    .sort(([breakPointName], [breakPointNameNext]) => getBpValue(breakPointName) - getBpValue(breakPointNameNext))
    .map(([breakPointName, src]) => getNativeSrcSetItemByBreakpoint(src as string, breakPointName))
    .filter(Boolean)
    .join(STRING_LITERALS.srcSetDivider);

  // TODO FAQ: How to do?
  const sizes = ''; // getSizes();

  return { nativeSrcSet, sizes };
}

function getSizes() {
  const result = Object.entries(IMAGE_SRC_SET)
    .map(([bpName, bpValue], i, arr) => {
      return bpValue ? `(max-width: ${bpValue}px) ${bpValue}px` : '';
      // return bpValue ? `(min-width: ${bpValue}px) ${arr[i+1]? arr[i+1][1]: null}px` : ''
    })
    .filter(Boolean);

  return result + ', 100vw';
}

function getNativeSrcSetItemByBreakpoint(src: string, breakPointName: string) {
  const bpValue = getBpValue(breakPointName);

  return bpValue ? `${src} ${bpValue}w` : '';
}

export function getBpValue(breakPointName: string) {
  return IMAGE_SRC_SET[breakPointName as keyof typeof IMAGE_SRC_SET];
}
