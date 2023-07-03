import type { ContentElementName, ContentElementTemplateProps, ContentElementModifiers } from './content-elements';
import type { ContentElementConfig } from './content-element-config';
import { BASE_CLASSNAME } from './base-classname';

export function getContentElementTemplatePropsByConfig<
  ElementName extends ContentElementName,
  ElementConfig extends ContentElementConfig<ElementName>,
>(config: ElementConfig) {
  const contentElementClassName = getContentElementClassName(config);

  const contentElementTag = getContentElementTag(config);

  const { modifiers, contentElementName, ...nativeProps } = config;

  const customProps = contentElementName === 'custom' ? { modifiers, contentElementName } : {};

  return {
    ...nativeProps,
    ...customProps,
    className: contentElementClassName,
    tag: contentElementTag,
  } as unknown as ContentElementTemplateProps<ElementName>;
}

function getClassNameByModifier<ElementName extends ContentElementName>(
  modifier: ContentElementModifiers<ElementName>[number],
) {
  return `${BASE_CLASSNAME}--${modifier}`;
}

const TAG_BY_ELEMENT_NAME = {
  text: 'p',
  block: 'div',
  image: 'img',
  list: 'ul',
  link: 'a',
} as Record<ContentElementName, string>;

const TAG_BY_ELEMENT_MODIFIER = {
  header: 'h1',
  section: 'section',
  title: 'h3',
  subtitle: 'h5',
  ol: 'ol',
};

function getContentElementTag<ElementName extends ContentElementName>(config: ContentElementConfig<ElementName>) {
  const { contentElementName, tag, modifiers = [] } = config;

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
  return TAG_BY_ELEMENT_NAME[contentElementName];
}

function getContentElementClassName<ElementName extends ContentElementName>(config: ContentElementConfig<ElementName>) {
  // TODO: FAQ HOW TO FIX?
  // @ts-ignore
  const { modifiers, className } = config;
  const classNameByContentName = `${BASE_CLASSNAME}-${config.contentElementName}`;
  // TODO: FAQ HOW TO FIX?
  // @ts-ignore
  const classNameByCustomName = config.customName ? `${BASE_CLASSNAME}-${config.customName}` : undefined;

  const classNameByModifiers = (modifiers || []).filter((m) => m && typeof m === 'string').map(getClassNameByModifier);

  return [className, BASE_CLASSNAME, classNameByContentName, classNameByCustomName, ...classNameByModifiers]
    .filter(Boolean)
    .join(' ');
}
