import type {
  ContentElementName,
  ContentElementTemplateProps,
  ContentElementModifiers,
  CustomConfig,
} from "./content-elements";
import type { ContentElementConfig } from "./content-element-config";
import { BASE_CLASSNAME } from "./base-classname";

export function getContentElementTemplatePropsByConfig<
  ElementName extends ContentElementName,
  ElementConfig extends ContentElementConfig<ElementName>,
>(config: ElementConfig, customConfig: CustomConfig) {
  const contentElementClassName =
    getContentElementClassName<ElementName>(config);

  const contentElementTag = getContentElementTag<ElementName>(
    config,
    customConfig?.tags,
  );

  const { modifiers, contentElementName, ...nativeProps } = config;

  const customProps =
    contentElementName === "custom" ? { modifiers, contentElementName } : {};

  return {
    ...nativeProps,
    ...customProps,
    className: contentElementClassName,
    tag: contentElementTag,
  } as unknown as ContentElementTemplateProps<ElementName>;
}

function getClassNameByModifier(modifier: ContentElementModifiers[number]) {
  return `${BASE_CLASSNAME}--${modifier}`;
}

const TAG_BY_ELEMENT_NAME = {
  text: "p",
  block: "div",
  image: "img",
  list: "ul",
  link: "a",
} as Record<ContentElementName, string>;

function getContentElementTag<ElementName extends ContentElementName>(
  config: ContentElementConfig<ElementName>,
  customTags?: CustomConfig["tags"],
) {
  const { contentElementName, tag, modifiers = [] } = config;

  // 1. By inline property
  if (tag) {
    return tag;
  }

  let tagByModifier;

  // 2. By  modifier
  for (const m of modifiers) {
    if (customTags?.byModifier) {
      tagByModifier = customTags.byModifier[m];
    }

    if (tagByModifier) {
      break;
    }
  }

  if (tagByModifier) {
    return tagByModifier;
  }

  // 3. Custom tag by name
  if (customTags?.byName) {
    const tagByName = customTags.byName[contentElementName];

    if (tagByName) {
      return tagByName;
    }
  }

  // 4. Default tag by name
  return TAG_BY_ELEMENT_NAME[contentElementName];
}

function getContentElementClassName<ElementName extends ContentElementName>(
  config: ContentElementConfig<ElementName>,
) {
  const { modifiers, className } = config;
  const isCustomElement = config.contentElementName === "custom";

  const classNameByContentName = `${BASE_CLASSNAME}-${config.contentElementName}`;
  // TODO: FAQ HOW TO FIX?
  // @ts-ignore
  const classNameByCustomName = config.customName
    ? // TODO: FAQ HOW TO FIX?
      // @ts-ignore
      `${BASE_CLASSNAME}-${config.customName}`
    : undefined;

  const classNameByModifiers = (modifiers || [])
    .filter((m) => m && typeof m === "string")
    .map(getClassNameByModifier);

  return [
    className,
    isCustomElement ? "" : BASE_CLASSNAME,
    isCustomElement ? "" : classNameByContentName,
    classNameByCustomName,
    ...classNameByModifiers,
  ]
    .filter(Boolean)
    .join(" ");
}
