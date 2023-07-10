# React content elements
[Official webpage](https://pkuznetsovdev.github.io/rce/)

React Content Elements is a JavaScript library that enhances the development experience by providing an additional layer for creating HTML structures and CSS styles.

```jsx
import CE from 'react-content-elements';
 
<CE.Block>Block Content Element</CE.Block>
// HTML
<div class="ce ce-block">Block Content Element</div>
 
<CE.Text>Text Content Element</CE.Text>
// HTML
<p class="ce ce-text">Text Content Element</p>
 
<CE.Image src="link/to/the-image.jpg" />
// HTML
<img class="ce ce-image" src="link/to/the-image.jpg" />
 
<CE.Link>Link Content Element</CE.Link>
// HTML
<a class="ce ce-link">Link Content Element</a>
 
<CE.Button>Button Content Element</CE.Button>
// HTML
<button class="ce ce-link" type="button">Button Content Element</button>
 
<CE.Divider />
// HTML
<hr class="ce ce-divider" />
```