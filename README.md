# React content elements

`ContentElement` is a safe namespace for content development.

Content development:

- development of template components
- development of custom components using template components(partially, for content or/and structure)
- cms content development

### CONTENT ELEMENT

```typescript
type CONTENT_ELEMENT = {
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
<ContentElement.Text>Hello, World!</ContentElement.Text>
// <p class="content-element content-text">Hello, World!</p>

<ContentElement.Text tag="h1">Hello, World!</ContentElement.Text>
// <h1 class="content-element content-text">Hello, World!</h1>

<ContentElement.Text tag="span" modifiers={['accent']}>Hello, World!</ContentElement.Text>
// <span class="content-element content-text content-element--accent">Hello, World!</span>
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

<ContentElement.Text>Text content element</ContentElement.Text>
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

1. BEM class modifiers for the content element(f.e. 'accent', 'big', 'hide-md', 'hide-lower-sm');



### CONTENT ELEMENT MAP

```typescript
const CONTENT_ELEMENTS_BY_NAME = {
  text: {
    types: ['title', 'subtitle', 'header', 'subheader', 'text-title', 'section-title', 'caption', 'description'],
    tag: ['h3', 'h1', 'h2', 'h4', 'h5', 'h6', 'p', 'span', 'b', 'i', 'em'],
    moifiers: ['center', 'left', 'right', 'bolder', 'thicker', 'big', 'sm'],
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
  icon: {
    types: [],
    tag: ['svg'],
    modifiers: [],
  },
} as const;

type ContentElementMap = typeof CONTENT_ELEMENTS_BY_NAME;
```