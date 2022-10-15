# Another custom elements
Another is a safe namespace for content development.

Content development:
- development of template components
- cms content

### ANOTHER
How to use:

```tsx
type ANOTHER_ELEMENT_PROPS = {
    name: ANOTHER_NAME,
    tag?: ANOTHER_TAG,
    modifiers?: ANOTHER_MODIFIER[],
}

<Another.El name={ANOTHER_NAME} /> // ANOTHER_NAME is required
<Another.El name={ANOTHER_NAME} tag={ANOTHER_TAG} /> // ANOTHER_TAG ANOTHER_TAGS_BY_ANOTHER_NAME
<Another.El name={ANOTHER_NAME} tag={ANOTHER_TAG} modifiers={ANOTHER_MODIFIER[]} /> // ANOTHER_MODIFIER
```

### ANOTHER MAP
```typescript
const ANOTHER_ELEMENTS_BY_ANOTHER_NAME = {
    text: {
        types: ['title', 'subtitle', 'header', 'subheader', 'text-title', 'section-title', 'caption', 'description'],
        tag: ['h3', 'h1', 'h2', 'h4', 'h5', 'h6', 'p', 'span', 'b', 'i', 'em'],
        moifiers: ['center', 'left', 'right', 'bolder', 'thicker', 'big', 'sm'],
    },
    icon: {
        types: [],
        tag: ['svg'],
        modifiers: [],
    },
    button: {
        types: ['button-icon', 'primary', 'secondary', 'cta', 'sign-in', 'reg'],
        tag: ['button', 'a'],
        modifiers: ['row', 'auto', 'column'],
    },
    link: {
        types: ['button'],
        tag: ['button', 'a'],
        modifiers: [],
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
        types: ['banner', 'section', 'container'],
        tag: ['hr'],
        modifiers: [],
    },
    list: {
        types: ['list-disk', 'list-oredered', 'list-grid'],
        tag: ['ul', 'ol'],
        modifiers: ['row', 'auto', 'column'],
    },
} as const;

type ANOTHER_MAP = typeof ANOTHER_TYPES_BY_ANOTHER_NAME;
```

```tsx
type ANOTHER_NAME = title | image | icon | list | button | link | divider | block;

<Another.El name={ANOTHER_NAME} />


<Another.El name={button} />

```


### ANOTHER NAME

```typescript
type ANOTHER_NAME = keyof ANOTHER_MAP;
```

`ANOTHER_NAME` is here to provide:
1. Base element template(f.e. 'title')
2. Divide elements by its _basic role_(f.e. 'icon')

Name of another element stands for `ANOTHER_NAME`

### ANOTHER TYPE

```typescript
type ANOTHER_TYPE = ANOTHER_MAP[keyof ANOTHER_MAP][number]
```

`ANOTHER_TYPE` is here to provide:
1. Different structure or _subrole_(f.e. 'BUTTON', 'ICON')
2. Commonly used lists of modifiers(f.e. 'section-title', 'secondary') or
   styles that can not be provided by `ANOTHER_MODIFIERS`
3. Commonly used business/dev logic patterns(f.e. 'cta', 'sign-in', 'section')

### ANOTHER MODIFIERS

```typescript
type ANOTHER_MODIFIERS = string[];
```

`ANOTHER_TYPE` is here to provide:
1. BEM classname modificators for the element(f.e. 'accent', 'big', 'hide-md', 'hide-lower-md');


### ANOTHER ELEMENT
```typescript
type ANOTHER_ELEMENT = {
    type?: ANOTHER_TYPE,
    anotherType?: ANOTHER_ELEMENT['type'],
    modifiers: ANOTHER_MODIFIERS,
    tag?: keyof HTMLElementTagNameMap;
}
```

`anotherType` stands for `BASE_ANOTHER_CLASSNAME`.  
If `anotherType` is not provided explicitly it equals to
the name of another element.

```tsx
const BASE_ANOTHER_CLASSNAME = `another-element another-${anotherType}`;
```

#### EXAMPLES:

---
`ANOTHER_NAME`
```tsx
<Another.Title>Terms and conditions</Another.Title>
// HTML
// <h2 classname="another-element another-title">Terms and conditions</h2>
```

---
`ANOTHER_TYPE`
```typescript
const DEFAULT_TAG_NAME_BY_ANOTHER_NAME:
    Record<ANOTHER_NAME, keyof HTMLElementTagNameMap> = {
    header: 'h1',
    title: 'h2',
    subtitle: 'h3',
    section: 'section',
    disk: 'ol',
};

<Another.Title type="subtitle">Terms and conditions</Another.Title>
// HTML
// <h3 classname="another-element another-subtitle">Terms and conditions</h2>
```

---
`ANOTHER_MODIFIERS`
```typescript
<Another.Title modifiers=['accent'] >Terms and conditions</Another.Title>
// HTML
// <h2 classname="another-element another-title another-element--accent">Terms and conditions</h2>
```

```scss
// ===CUSTOM ELEMENTS===
$another-element: 'another-element';

// modifiers
$another-element--accent: 'another-element--accent';

// block
$another-block: 'another-block';
$another-section: 'another-section';
$another-banner: 'another-banner';
$another-container: 'another-container';


// title
$another-header: 'another-header';
$another-subheader: 'another-subheader';
$another-title: 'another-title';
$another-subtitle: 'another-subtitle';
$another-section-title: 'another-section-title';
$another-title-text: 'another-title-text';

// text
$another-text: 'another-text';
$another-caption: 'another-caption';

// image
$another-image: 'another-image';

// list
$another-list: 'another-list';
$another-list-item: 'another-list-item';

// cta
$another-cta: 'another-cta';
$another-reg: 'another-reg';
$another-deposit: 'another-deposit';

$another-cta-shared: $another-cta $another-reg $another-deposit;

// divider
$another-divider: 'another-divider';

// ===CUSTOM ELEMENTS===
```

```tsx
export function WithCustomElement<T extends CustomElementPropsBase>(
    Wrapped: React.FC<T>,
    elementName: CustomelementName,
) {
    return (wrappedProps: T) => {
        const className = getCustomElementClassName(wrappedProps, { elementName });

        const rawContent = getCustomElementRawContent(wrappedProps);

        // any other magic for custom elements should be provided here, f.e. set a default tag by the 'elementName' value
        // const tagName = wrappedProps.tagName || DEFAULT_TAG_NAME_BY_ANOTHER_NAME[elementName];

        return <Wrapped {...wrappedProps} className={className} rawContent={rawContent} />;
    };
}

export function WithCustomElement<T extends CustomElementPropsBase>(
    Wrapped: React.FC<T>,
    elementType: CustomElementType,
) {
    return (wrappedProps: T) => {
        const className = getCustomElementClassName(wrappedProps, { elementType });

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
    { elementType }: CustomElementClassNameDependencies,
) {
    const isListElement = elementType === CUSTOM_ELEMENTS.types.list;
    const isBannerElement = elementType === CUSTOM_ELEMENTS.types.banner;
    const isCTAElement = elementType === CUSTOM_ELEMENTS.types.cta;
    const isBlockElement = elementType === CUSTOM_ELEMENTS.types.block;

    // TODO: [another-element] add `getModifiers` function
    const modifiers =
        wrappedProps.modifiers?.map((modifier) => (modifier ? `${CUSTOM_ELEMENTS.classname}--${modifier}` : '')) || [];

    const templateModClassName = // @ts-ignore-next-line
        wrappedProps.templateMod // @ts-ignore-next-line
            ? `${CUSTOM_ELEMENTS.classname}-${wrappedProps.templateMod || (isCTAElement && wrappedProps?.cta?.templateMod)}`
            : `${CUSTOM_ELEMENTS.classname}-${elementType}`;

    let className = utils.classnames(
        CUSTOM_ELEMENTS.classname,
        templateModClassName,
        ...modifiers,
        wrappedProps.className,
    );

    if (isBannerElement) {
        className = utils.classnames(CUSTOM_ELEMENTS.classname, templateModClassName, ...modifiers);
    }

    if (isListElement) {
        className = utils.classnames(
            CUSTOM_ELEMENTS.classname,
            templateModClassName,
            // @ts-ignore-next-line
            wrappedProps.className && `${wrappedProps.className}-list`,
            ...modifiers,
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