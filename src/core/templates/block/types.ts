import { ImageSrcSet } from '../../types';

export interface BlockProps extends React.HTMLProps<HTMLDivElement> {
  bgSrcSet?: ImageSrcSet | string;
  bgSrc?: string;
}
