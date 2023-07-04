### Features
##### Change base classname
- default: "content-element"
- another: "another-element" // a secret feature
- custom: "custom-name"

##### Change default tags for the types
##### Emit modifiers as separate/independent classes
F.E.
Generated html
```tsx

<ContentElement.Text modifiers={['accent']}>Hello, World!</ContentElement.Text>
// <span class="content-element content-text content-element--accent">Hello, World!</span>
// not  <p class="content-element content-text content-element--accent">Hello, World!</p>
```

Generated css

```css
.accent, /* or .content-element > .accent */
.content-element--accent {
    color: rgba(46, 206, 7, 0.4); /* scss color: $accent-color;*/
}
```

##### MODIFIERS BY CONFIG
- Extend or replace?
```tsx
<ContentElement.Text modifiers={['accent']} config={{ modifiers: ['secondary'] }}>Hello, World!</ContentElement.Text>
// <p class="content-element content-text content-element--secondary">Hello, World!</p>
// or
// <p class="content-element content-text content-element--accent content-element--secondary">Hello, World!</p>
```

##### ADD MODIFIERS
- 'hide'
- size: 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'


##### Generate layout automatically from Figma design
1. use ID's for the FigmaElement-Component link, go through the node tree in Figma
2. build a content component tree with 5 nodes depth, mark the nodes with nested elements
3. if nodes with nested element - go to step 2, else go to next step
4. generate content components by content component tree
5. render with react


