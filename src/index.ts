import React from 'react';

import { getMyElementByNameRenderer } from './core';

const getMyElementByName = getMyElementByNameRenderer();

export const CE = {
  Text: getMyElementByName('text'),
  Image: getMyElementByName('image'),
  Block: getMyElementByName('block'),
  List: getMyElementByName('list'),
  Link: getMyElementByName('link'),
  Divider: getMyElementByName('divider'),
  Button: getMyElementByName('button'),
  Icon: getMyElementByName('icon'),
  Custom: getMyElementByName('custom'),
} as const;

export default CE;

import * as utils from './utils';
import * as shared from './core/shared';

module.exports = {
  CE,
  ...utils,
  ...shared,
};
