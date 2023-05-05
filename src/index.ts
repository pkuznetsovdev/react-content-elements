// import React from 'react';

import { getMyElementByNameRenderer } from './core';

const getMyElementByName = getMyElementByNameRenderer();

const CE = {
  Text: getMyElementByName('text'),
  Image: getMyElementByName('image'),
  Block: getMyElementByName('block'),
  List: getMyElementByName('list'),
  Link: getMyElementByName('link'),
  Divider: getMyElementByName('divider'),
  Button: getMyElementByName('button'),
  Icon: getMyElementByName('icon'),
  Custom: getMyElementByName('custom'),
};

//export default CE;

import * as utils from './utils';
import * as shared from './core/shared';

export default {
  CE,
  ...utils,
  ...shared,
};
