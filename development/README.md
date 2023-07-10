Link package locally ([source](https://iws.io/2022/invalid-hook-multiple-react-instances)):
1. Check peer deps
```json
{
  "peerDependencies": {
    "react": "^18",
    "react-dom": "^18"
  }
}
```
2. Share react
```textmate
npm link ./path-to-app/node_modules/react ./path-to-app/node_modules/react-dom
```
3. Link package
```textmate
npm link
```
4. Link package in the consumer app
```textmate
npm link react-content-elements
```