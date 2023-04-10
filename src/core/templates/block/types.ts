import { ImageSrcSetProp } from '../../utils';

export interface BlockProps extends React.HTMLProps<HTMLDivElement> {
  backgroundImage?: ImageSrcSetProp | string;
}
