import { MyElementConfig, MyElementName, MyElementTemplateProps, MyElementModifiers } from '../types';
import { BASE_CLASSNAME } from '../constants';

export function getMyElementTemplatePropsByConfig<
  ElementName extends MyElementName,
  ElementConfig extends MyElementConfig<ElementName>,
>(config: ElementConfig) {
  const myElementClassName = getMyElementClassName(config);

  const myElementTag = getMyElementTag(config);

  const { modifiers, myname, contentConditions, ...nativeProps } = config;

  const customProps = myname === 'custom' ? { modifiers, myname, contentConditions } : {};

  return {
    ...nativeProps,
    ...customProps,
    className: myElementClassName,
    tag: myElementTag,
  } as unknown as MyElementTemplateProps<ElementName>;
}

function getClassNameByModifier<ElementName extends MyElementName>(modifier: MyElementModifiers<ElementName>[number]) {
  return `${BASE_CLASSNAME}--${modifier}`;
}

const TAG_BY_ELEMENT_NAME = {
  text: 'p',
  block: 'div',
  image: 'img',
  list: 'ul',
  link: 'a',
} as Record<MyElementName, string>;

const TAG_BY_ELEMENT_MODIFIER = {
  header: 'h1',
  section: 'section',
  title: 'h3',
  subtitle: 'h5',
  ol: 'ol',
};

function getMyElementTag<ElementName extends MyElementName>(config: MyElementConfig<ElementName>) {
  const { myname, tag, modifiers = [] } = config;

  if (tag) {
    return tag;
  }

  let tagByModifier;

  for (const m of modifiers) {
    // TODO: FAQ HOW TO FIX?
    // @ts-ignore
    tagByModifier = TAG_BY_ELEMENT_MODIFIER[m];
    if (tagByModifier) {
      break;
    }
  }

  if (tagByModifier) {
    return tagByModifier;
  }

  // TODO: FAQ HOW TO FIX?
  // @ts-ignore
  return TAG_BY_ELEMENT_NAME[myname];
}

function getMyElementClassName<ElementName extends MyElementName>(config: MyElementConfig<ElementName>) {
  // TODO: FAQ HOW TO FIX?
  // @ts-ignore
  const { modifiers, className } = config;
  const classNameByMyName = `${BASE_CLASSNAME}-${config.myname}`;
  // TODO: FAQ HOW TO FIX?
  // @ts-ignore
  const classNameByCustomName = config.customName ? `${BASE_CLASSNAME}-${config.customName}` : undefined;

  const classNameByModifiers = (modifiers || []).filter((m) => m && typeof m === 'string').map(getClassNameByModifier);

  return [className, BASE_CLASSNAME, classNameByMyName, classNameByCustomName, ...classNameByModifiers]
    .filter(Boolean)
    .join(' ');
}
