# React content elements

`ContentElement` is a safe namespace for content development.

Content development:

- development of template components
- development of custom components using template components(partially, for content or/and structure)
- cms content development

### CONTENT ELEMENT

```typescript
type CONTENT_ELEMENT = {
  name: ContentElementName; 
  type?: ContentElementType; 
  tag?: ContentElementTag; 
  modifiers?: ContentElementModifier[];
}
```

`ContentElement` is here to provide:
- a determined and predictable class naming patterns for your web content
- a determined and predictable HTML structure patterns for your web content
- a self documented codebase to develop your web content

##### Examples

```tsx
<ContentElement name="text">Hello, World!</ContentElement>
// <p class="content-element content-text">Hello, World!</p>

<ContentElement name="text" tag="h1">Hello, World!</ContentElement>
// <h1 class="content-element content-text">Hello, World!</h1>

<ContentElement name="text" tag="span" modifiers={['accent']}>Hello, World!</ContentElement>
// <span class="content-element content-text content-element--accent">Hello, World!</span>
```

### CONTENT ELEMENT MAP

```typescript
const CONTENT_ELEMENTS_BY_NAME = {
  text: {
    types: [
      'title',
      'subtitle',
      'header',
      'subheader',
      'text-title',
      'section-title',
      'caption',
      'description'
    ],
    tag: [
      'h3',
      'h1',
      'h2',
      'h4',
      'h5',
      'h6',
      'p',
      'span',
      'b',
      'i',
      'em'
    ],
    moifiers: [
      'center',
      'left',
      'right',
      'bolder',
      'thicker',
      'big',
      'sm'
    ],
  },
  image: {
    types: [],
    tag: ['image'],
    modifiers: [],
  },
  divider: {
    types: [],
    tag: ['hr'],
    modifiers: [],
  },
  block: {
    types: [
      'banner',
      'section',
      'container'
    ],
    tag: ['hr'],
    modifiers: [],
  },
  list: {
    types: [
      'list-disk',
      'list-oredered',
      'list-grid'
    ],
    tag: [
      'ul',
      'ol'
    ],
    modifiers: [
      'row',
      'auto',
      'column'
    ],
  },
  button: {
    types: [
      'button-icon',
      'primary',
      'secondary',
      'cta',
      'sign-in',
      'reg'
    ],
    tag: [
      'button',
      'a'
    ],
    modifiers: [
      'row',
      'auto',
      'column'
    ],
  },
  link: {
    types: ['button'],
    tag: [
      'button',
      'a'
    ],
    modifiers: [],
  },
  icon: {
    types: [],
    tag: ['svg'],
    modifiers: [],
  },
} as const;

type ContentElementMap = typeof CONTENT_ELEMENTS_BY_NAME;
```

### CONTENT ELEMENT NAME

```typescript
type ContentElementName = keyof ContentElementMap;
```

`ContentElementName` is here to provide:

1. Base content element template(f.e. 'title')
2. Divide elements by its _basic role_(f.e. 'icon')

Fun facts:
- property 'name' of `ContentElement` stands for `ContentElementName`
- property 'name' is used to generate `BASE_CONTENT_ELEMENT_CLASSNAME`.

```tsx
const BASE_CONTENT_ELEMENT_CLASSNAME = `content-element content-${name}`; 

<ContentElement name="text">Text content element</ContentElement>
// <p class="content-element content-text">Text content element</p>
```

### CONTENT ELEMENT TYPE

```typescript
type ContentElementType = ContentElementMap[keyof ContentElementMap][number]
```

`ContentElementType` is here to provide:

1. Another content element template or _subrole_(f.e. 'BUTTON', 'ICON')
2. Commonly used lists of _content element modifiers_(f.e. 'section-title', 'secondary') or
   styles that can not be provided by `CONTENT_ELEMENT_MODIFIERS`
3. Commonly used business/dev logic patterns(f.e. 'cta', 'sign-in', 'section')

Property 'type' of `ContentElement` stands for `ContentElementType`

### CONTENT ELEMENT MODIFIERS

```typescript
type ContentElementModifier = string;
```

`ContentElementModifier` is here to provide:

1. BEM class modifiers for the element(f.e. 'accent', 'big', 'hide-md', 'hide-lower-md');

```scss
// ===CONTENT ELEMENTS===
// content-element
$content-element: 'content-element';

// content-element-text
$content-text: 'content-text';

// content-element-block
$content-block: 'content-block';

// content-element-block
$content-block: 'content-block';


// ---===CONTENT ELEMENTS===---

// modifiers
$content-element--accent: 'content-element--accent';

// block
$content-block: 'content-block';
$content-section: 'content-section';
$content-banner: 'content-banner';
$content-container: 'content-container';


// title
$content-header: 'content-header';
$content-subheader: 'content-subheader';
$content-title: 'content-title';
$content-subtitle: 'content-subtitle';
$content-section-title: 'content-section-title';
$content-title-text: 'content-title-text';
$content-caption: 'content-caption';

// image
$content-image: 'content-image';

// list
$content-list: 'content-list';
$content-list-item: 'content-list-item';

// button
$content-button: 'content-button';
$content-cta: 'content-cta';
$content-reg: 'content-reg'; // modifiers?
$content-deposit: 'content-deposit'; // modifiers?

$content-cta-shared: $content-cta $content-reg $content-deposit;

// divider
$content-divider: 'content-divider';

// ===CUSTOM ELEMENTS===
```

```tsx
export function WithCustomElement<T extends CustomElementPropsBase>(
  Wrapped: React.FC<T>,
  elementName: CustomelementName,
) {
  return (wrappedProps: T) => {
    const className = getCustomElementClassName(wrappedProps, {elementName});

    const rawContent = getCustomElementRawContent(wrappedProps);

    // any other magic for custom elements should be provided here, f.e. set a default tag by the 'elementName' value
    // const tagName = wrappedProps.tagName || DEFAULT_TAG_NAME_BY_CONTENT_ELEMENT_NAME[elementName];

    return <Wrapped {...wrappedProps} className={className} rawContent={rawContent} />;
  };
}

export function WithCustomElement<T extends CustomElementPropsBase>(
  Wrapped: React.FC<T>,
  elementType: CustomElementType,
) {
  return (wrappedProps: T) => {
    const className = getCustomElementClassName(wrappedProps, {elementType});

    const rawContent = getCustomElementRawContent(wrappedProps);

    // any other magic for custom elements should be provided here, f.e. set a default tag by the 'elementType' value
    // const tagName = props.tagName || DEFAULT_TAG_NAMES[elementType];

    return <Wrapped {...wrappedProps} className={className} rawContent={rawContent} />;
  };
}

// ==== START: WithCustomElement helpers
type CustomElementClassNameDependencies = { elementType: CustomElementType };

function getCustomElementClassName<T extends CustomElementPropsBase>(
  wrappedProps: T,
  {elementType}: CustomElementClassNameDependencies,
) {
  const isListElement = elementType === CUSTOM_ELEMENTS.types.list;
  const isBannerElement = elementType === CUSTOM_ELEMENTS.types.banner;
  const isCTAElement = elementType === CUSTOM_ELEMENTS.types.cta;
  const isBlockElement = elementType === CUSTOM_ELEMENTS.types.block;

  // TODO: [content-element] add `getModifiers` function
  const modifiers = wrappedProps.modifiers?.map((modifier) => (
    modifier ? `${CUSTOM_ELEMENTS.classname}--${modifier}` : ''
  )) || [];

  const templateModClassName = // @ts-ignore-next-line
    wrappedProps.templateMod // @ts-ignore-next-line
      ? `${CUSTOM_ELEMENTS.classname}-${wrappedProps.templateMod || (
        isCTAElement && wrappedProps?.cta?.templateMod
      )}` : `${CUSTOM_ELEMENTS.classname}-${elementType}`;

  let className = utils.classnames(CUSTOM_ELEMENTS.classname, templateModClassName, ...modifiers,
    wrappedProps.className,
  );

  if (isBannerElement) {
    className = utils.classnames(CUSTOM_ELEMENTS.classname, templateModClassName, ...modifiers);
  }

  if (isListElement) {
    className = utils.classnames(CUSTOM_ELEMENTS.classname, templateModClassName, // @ts-ignore-next-line
      wrappedProps.className && `${wrappedProps.className}-list`, ...modifiers,
    );
  }

  return className;
}

/* @description A fallback for deprecated properties: ["rawHTML", "rawHtml"]
 * @description A fallback for "rawHtml" (incorrect typing, should be "rawHTML") to prevent rendering empty element if content manager uses incorrect case.
 * */
function getCustomElementRawContent<T extends CustomElementPropsBase>(wrappedProps: T) {
  return wrappedProps.rawContent || wrappedProps.rawHtml || wrappedProps.rawHTML;
}

// ==== END: WithCustomElement helpers

export function WithContentElement<T extends CustomElementPropsBase>(
  Wrapped: React.FC<T>,
  elementType: ContentElementType,
) {
  return (wrappedProps: T) => {
    const contentElementClassName = getContentElementClassName(elementType);

    // any other magic for content elements should be provided here

    return <Wrapped {...wrappedProps} className={utils.classnames(contentElementClassName, wrappedProps.className)} />;
  };
}

// ==== START: WithContentElement helpers
function getContentElementClassName(elementType: ContentElementType) {
  return `content-element content-element--${elementType}`;
}

// ==== END: WithContentElement helpers

```