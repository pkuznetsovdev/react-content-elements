import { getContentElementByNameRenderer } from './core';
import {ContentElementName, CustomConfig} from "./core/content-element";

const CE = (() => {
  let customConfig: CustomConfig = {};

  const setup = (customConfigBySetup: CustomConfig) => {
    customConfig = customConfigBySetup;
  }

  const CE = {
    Text: getContentElementByNameRenderer(customConfig)('text'),
    Image: getContentElementByNameRenderer(customConfig)('image'),
    Block: getContentElementByNameRenderer(customConfig)('block'),
    List: getContentElementByNameRenderer(customConfig)('list'),
    Link: getContentElementByNameRenderer(customConfig)('link'),
    Divider: getContentElementByNameRenderer(customConfig)('divider'),
    Button: getContentElementByNameRenderer(customConfig)('button'),
    Custom: getContentElementByNameRenderer(customConfig)('custom'),
  } as const;

  return {
    ...CE,
    setup,
  }
})();

class CEClass {
  customConfig: CustomConfig = {};
  constructor(options: CustomConfig = {}) {
    this.customConfig = options || {};
  }
  static createInstance(options = {}) { return new CEClass(options) }
  static getContentElementByName(customConfig: CustomConfig, name: ContentElementName) {
    return getContentElementByNameRenderer(customConfig)(name)
  }
  setup(customConfigBySetup: CustomConfig) {
    this.customConfig = customConfigBySetup;
  }

  Text() { return getContentElementByNameRenderer(this.customConfig)('text')}
  Image() { return  getContentElementByNameRenderer(this.customConfig)('image')}
  Block() {
    return  getContentElementByNameRenderer(this.customConfig)('block')
  }
  List() { return  getContentElementByNameRenderer(this.customConfig)('list')}
  Link() { return  getContentElementByNameRenderer(this.customConfig)('link')}
  Divider() { return  getContentElementByNameRenderer(this.customConfig)('divider')}
  Button() { return  getContentElementByNameRenderer(this.customConfig)('button')}
  Custom() { return  getContentElementByNameRenderer(this.customConfig)('custom')}
}

// const CE = new CEClass();

export default CE;

export * from './utils';
export * from './core/shared';