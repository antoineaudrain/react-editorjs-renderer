# React Editorjs Renderer [![NPM](https://img.shields.io/npm/v/react-editorjs-renderer.svg)](https://www.npmjs.com/package/react-editorjs-renderer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Render React block style hassleless.

- [Creating an App](#creating-an-app) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

A library for rendering styled, responsive and flexible React components from [block style](https://editorjs.io/saving-data) data objects generated by codex editors like [Editor.js](https://editorjs.io/).

## Demo

See the [demo](https://react-editorjs-renderer-example.netlify.app/).

## Quickstart

**1. Install**

```shell
npm install react-editorjs-renderer
```

... or using yarn

```$xslt
yarn add react-editorjs-renderer
```

**2. Import EditorRendererProvider to your React App** (ES6 module syntax)

```javascript
import EditorRendererProvider from 'src/index';

...

const App = () => {
  return (
    <EditorRendererProvider data={data} />
  );
};

export default App;
```

... or using CommonJS syntax:

```javascript
const EditorRendererProvider = require('src/index');

...

const App = () => {
  return (
    <EditorRendererProvider data={data} />
  );
};

export default App;
```

For custom styling, and other options read on ...

## API

### Custom styling

You can style all supported components by passing a style prop to the EditorRendererProvider component.
This is an object whose keys correspond to the names of the supported blocks you intend to style.

```javascript
import EditorRendererProvider from 'src/index';

...

const customStyle = {
  header: {
    textAlign: 'left',
    color: '#CECECE',
  },
  ...
};

<EditorRendererProvider data={data} style={customStyle} />
```

### License

React EditorJS Renderer is open source software [licensed as MIT](https://github.com/facebook/create-react-app/blob/master/LICENSE).

