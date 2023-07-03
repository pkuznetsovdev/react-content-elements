import { getContentElementByNameRenderer } from './core';

const getContentElementByName = getContentElementByNameRenderer();

const CE = {
  Text: getContentElementByName('text'),
  Image: getContentElementByName('image'),
  Block: getContentElementByName('block'),
  List: getContentElementByName('list'),
  Link: getContentElementByName('link'),
  Divider: getContentElementByName('divider'),
  Button: getContentElementByName('button'),
  Custom: getContentElementByName('custom'),
};

//export default CE;

export * from './utils';
export * from './core/shared';

export { CE };

export default {
  CE,
};
