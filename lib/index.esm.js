import React from 'react';
import PropTypes from 'prop-types';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propsConstructor = function propsConstructor(customStyle, defaultStyle) {
  return function (type) {
    var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (!!child) {
      return {
        className: "er-".concat([type, child].join('__')),
        style: _objectSpread(_objectSpread({}, !customStyle.disable ? defaultStyle[child] : {}), customStyle[child] || {})
      };
    }

    return {
      className: "er-".concat(type),
      style: _objectSpread(_objectSpread({}, !customStyle.disable ? defaultStyle : {}), customStyle || {})
    };
  };
};

var style = {
  width: '100%',
  lineHeight: '1.6em',
  textAlign: 'center',
  padding: '.4em 0',
  '&::before': {
    display: 'inline-block',
    content: '***',
    fontSize: '30px',
    lineHeight: '65px',
    height: '30px',
    letterSpacing: '0.2em',
    color: '#313649'
  }
};

Delimiter.propTypes = {
  style: PropTypes.object
};

function Delimiter(_ref) {
  var _ref$style = _ref.style,
      style$1 = _ref$style === void 0 ? {} : _ref$style;
  var getProps = propsConstructor(style$1, style);
  var delimiterStyle = getProps('delimiter');
  return /*#__PURE__*/React.createElement("div", delimiterStyle);
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

var style$1 = {
  fontFamily: 'Lucida Grande,Lucida Sans Unicode,Lucida Sans',
  letterSpacing: '-.03em',
  padding: '1em 0',
  margin: '0 0 -0.9em 0',
  lineHeight: '1.5em',
  outline: 'none',
  color: '#313649'
};

Header.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired
  }).isRequired,
  style: PropTypes.object
};

function Header(_ref) {
  var data = _ref.data,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var getProps = propsConstructor(style, style$1);
  var headerStyle = getProps('header');
  var content = data.text && {
    __html: data.text
  };

  switch (data.level) {
    case 1:
      return /*#__PURE__*/React.createElement("h1", _extends_1({}, headerStyle, {
        dangerouslySetInnerHTML: content
      }));

    case 2:
      return /*#__PURE__*/React.createElement("h2", _extends_1({}, headerStyle, {
        dangerouslySetInnerHTML: content
      }));

    case 3:
      return /*#__PURE__*/React.createElement("h3", _extends_1({}, headerStyle, {
        dangerouslySetInnerHTML: content
      }));

    case 4:
      return /*#__PURE__*/React.createElement("h4", _extends_1({}, headerStyle, {
        dangerouslySetInnerHTML: content
      }));

    case 5:
      return /*#__PURE__*/React.createElement("h5", _extends_1({}, headerStyle, {
        dangerouslySetInnerHTML: content
      }));

    default:
      return '';
  }
}

var style$2 = {
  filled: {
    padding: '.4em 0'
  },
  image: {
    borderRadius: '3px',
    overflow: 'hidden',
    marginBottom: '10px'
  },
  'image-picture': {
    maxWidth: '100%',
    verticalAlign: 'bottom',
    display: 'block'
  },
  caption: {
    fontSize: '15px',
    color: '#313649',
    lineHeight: 1.6,
    letterSpacing: '.005em',
    textDecoration: 'underline',
    textAlign: 'center'
  }
};

Image.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired,
    caption: PropTypes.string.isRequired,
    withBorder: PropTypes.bool.isRequired,
    stretched: PropTypes.bool.isRequired,
    withBackground: PropTypes.bool.isRequired
  }).isRequired,
  style: PropTypes.shape({
    disable: PropTypes.bool,
    figure: PropTypes.object,
    img: PropTypes.object,
    figcaption: PropTypes.object
  })
};

function Image(_ref) {
  var data = _ref.data,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var getProps = propsConstructor(style, style$2);
  var filledStyle = getProps('image', 'filled');
  var imageStyle = getProps('image', 'image');
  var imagePictureStyle = getProps('image', 'image-picture');
  var captionStyle = getProps('image', 'caption');
  var caption = data.caption && {
    __html: data.caption
  };
  return /*#__PURE__*/React.createElement("div", filledStyle, /*#__PURE__*/React.createElement("div", imageStyle, /*#__PURE__*/React.createElement("img", _extends_1({
    src: data.file.url,
    alt: data.caption || ''
  }, imagePictureStyle))), caption && /*#__PURE__*/React.createElement("figcaption", _extends_1({}, captionStyle, {
    dangerouslySetInnerHTML: caption
  })));
}

var style$3 = {
  ol: {
    padding: '.4em 0 .4em 40px',
    margin: '0',
    outline: 'none',
    listStyle: 'decimal'
  },
  ul: {
    padding: '.4em 0 .4em 40px',
    margin: '0',
    outline: 'none',
    listStyle: 'disc'
  },
  li: {
    padding: '5.5px 0 5.5px 3px',
    lineHeight: '1.6em',
    fontSize: '15px',
    color: '#313649',
    letterSpacing: '.005em'
  }
};

List.propTypes = {
  data: PropTypes.shape({
    style: PropTypes.oneOf(['ordered', 'unordered']).isRequired,
    items: PropTypes.array.isRequired
  }).isRequired,
  style: PropTypes.shape({
    disable: PropTypes.bool,
    ol: PropTypes.object,
    ul: PropTypes.object,
    li: PropTypes.object
  })
};

function List(_ref) {
  var data = _ref.data,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var getProps = propsConstructor(style, style$3);
  var orderedListStyle = getProps('list', 'ol');
  var unorderedListStyle = getProps('list', 'ul');
  var itemStyle = getProps('list', 'li');
  var content = data.items.map(function (item, index) {
    var content = item && {
      __html: item
    };
    return /*#__PURE__*/React.createElement("li", _extends_1({
      key: index
    }, itemStyle, {
      dangerouslySetInnerHTML: content
    }));
  });
  return data.style === 'ordered' ? /*#__PURE__*/React.createElement("ol", orderedListStyle, content) : /*#__PURE__*/React.createElement("ul", unorderedListStyle, content);
}

var style$4 = {
  margin: '0',
  lineHeight: '1.6em',
  outline: 'none',
  padding: '.4em 0',
  fontSize: '15px',
  color: '#313649',
  letterSpacing: '.005em',
  '& a': {
    fontSize: '15px',
    color: '#313649',
    lineHeight: '1.6em',
    letterSpacing: '.005em'
  },
  '& code': {
    background: 'rgba(250, 239, 240, 0.78)',
    color: '#b44437',
    padding: '3px 4px',
    borderRadius: '5px',
    margin: '0 1px',
    fontFamily: 'inherit',
    fontSize: '0.86em',
    fontWeight: 500,
    letterSpacing: '0.3px',
    lineHeight: '1.6em'
  },
  '& mark': {
    background: 'rgba(245,235,111,0.29)',
    fontSize: '15px',
    color: '#313649',
    lineHeight: '1.6em',
    letterSpacing: '.005em'
  }
};

Paragraph.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired,
  style: PropTypes.object
};

function Paragraph(_ref) {
  var data = _ref.data,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var getProps = propsConstructor(style, style$4);
  var paragraphStyle = getProps('paragraph');
  var content = data.text && {
    __html: data.text
  };
  return /*#__PURE__*/React.createElement("p", _extends_1({}, paragraphStyle, {
    dangerouslySetInnerHTML: content
  }));
}

var style$5 = {
  blockquote: {
    margin: '0',
    padding: '.4em 0 .4em 40px'
  },
  inner: {
    borderLeft: '3px solid #C4C4C4',
    padding: '10px 12px 10px 40px'
  },
  content: {
    lineHeight: '1.6em',
    margin: '0 0 10px 0',
    fontSize: '15px',
    color: '#313649',
    letterSpacing: '.005em'
  },
  caption: {
    color: '#6E798C',
    margin: '0',
    fontSize: '15px',
    lineHeight: '1.6em',
    letterSpacing: '.005em'
  }
};

Quote.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    caption: PropTypes.string,
    alignment: PropTypes.oneOf(['left', 'center'])
  }).isRequired,
  style: PropTypes.shape({
    disable: PropTypes.bool,
    blockquote: PropTypes.object,
    inner: PropTypes.object,
    content: PropTypes.object
  })
};

function Quote(_ref) {
  var data = _ref.data,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var getProps = propsConstructor(style, style$5);
  var blockquoteStyle = getProps('quote', 'blockquote');
  var quoteInner = getProps('quote', 'inner');
  var contentStyle = getProps('quote', 'content');
  var captionStyle = getProps('quote', 'caption');

  var getAlignment = function getAlignment() {
    return data.alignment === 'center' ? 'center' : 'left';
  };

  var content = data.text && {
    __html: data.text
  };
  var caption = data.caption && {
    __html: data.caption
  };
  return /*#__PURE__*/React.createElement("blockquote", blockquoteStyle, /*#__PURE__*/React.createElement("div", quoteInner, /*#__PURE__*/React.createElement("p", _extends_1({}, contentStyle, {
    style: {
      textAlign: getAlignment()
    },
    dangerouslySetInnerHTML: content
  })), caption && /*#__PURE__*/React.createElement("p", _extends_1({}, captionStyle, {
    style: {
      textAlign: getAlignment()
    }
  }), /*#__PURE__*/React.createElement("small", null, /*#__PURE__*/React.createElement("i", {
    dangerouslySetInnerHTML: caption
  })))));
}

var style$6 = {
  table: {
    border: '1px solid #dbdbe2',
    borderSpacing: 0,
    tableLayout: 'fixed',
    borderRadius: 3,
    height: '100%',
    width: '100%'
  },
  body: {
    display: 'table-row-group',
    verticalAlign: 'middle',
    borderColor: 'inherit'
  },
  row: {
    display: 'table-row',
    verticalAlign: 'inherit',
    borderColor: 'inherit'
  },
  cell: {
    border: '1px solid #dbdbe2',
    padding: 0,
    verticalAlign: 'top'
  },
  content: {
    padding: 10,
    height: '100%'
  }
};

Table.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
  }).isRequired,
  style: PropTypes.shape({
    disable: PropTypes.bool,
    table: PropTypes.object,
    body: PropTypes.object,
    row: PropTypes.object,
    cell: PropTypes.object,
    content: PropTypes.object
  })
};

function Table(_ref) {
  var data = _ref.data,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var getProps = propsConstructor(style, style$6);
  var tableStyle = getProps('quote', 'table');
  var tableBodyStyle = getProps('quote', 'body');
  var tableRowStyle = getProps('quote', 'row');
  var tableCellStyle = getProps('quote', 'cell');
  var tableContentStyle = getProps('quote', 'content');
  var content = data.content.map(function (row, index) {
    return /*#__PURE__*/React.createElement("tr", _extends_1({
      key: index
    }, tableRowStyle), row.map(function (col, index) {
      var content = col && {
        __html: col
      };
      return /*#__PURE__*/React.createElement("td", _extends_1({
        key: index
      }, tableCellStyle), /*#__PURE__*/React.createElement("div", _extends_1({}, tableContentStyle, {
        dangerouslySetInnerHTML: content
      })));
    }));
  });
  return /*#__PURE__*/React.createElement("table", tableStyle, /*#__PURE__*/React.createElement("tbody", tableBodyStyle, content));
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultComponents = [{
  name: 'delimiter',
  component: Delimiter
}, {
  name: 'paragraph',
  component: Paragraph
}, {
  name: 'header',
  component: Header
}, {
  name: 'image',
  component: Image
}, {
  name: 'quote',
  component: Quote
}, {
  name: 'list',
  component: List
}, {
  name: 'table',
  component: Table
}];
EditorRendererProvider.propTypes = {
  data: PropTypes.shape({
    blocks: PropTypes.array.isRequired
  }),
  components: PropTypes.PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired
  })),
  style: PropTypes.shape({
    disable: PropTypes.bool,
    delimiter: PropTypes.object,
    header: PropTypes.object,
    image: PropTypes.object,
    list: PropTypes.object,
    paragraph: PropTypes.object,
    quote: PropTypes.object
  })
};

function EditorRendererProvider(_ref) {
  var data = _ref.data,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? undefined : _ref$style,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? [] : _ref$components;
  var duplicates = components.reduce(function (acc, cur) {
    return [].concat(toConsumableArray(acc), [cur.name]);
  }, []).some(function (name, index, array) {
    return array.indexOf(name) !== index;
  });

  if (duplicates) {
    console.error('React EditorJS Renderer: duplicates `names` in components');
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }

  var filteredDefaultComponents = !!components ? defaultComponents.filter(function (_ref2) {
    var name = _ref2.name;
    return !components.reduce(function (acc, cur) {
      return [].concat(toConsumableArray(acc), [cur.name]);
    }, []).includes(name);
  }) : defaultComponents;
  return data.blocks.map(function (block, index) {
    var matchingComponent = [].concat(toConsumableArray(filteredDefaultComponents), toConsumableArray(components)).find(function (_ref3) {
      var name = _ref3.name;
      return name === block.type;
    });

    if (matchingComponent) {
      var Components = matchingComponent.component;
      var props = {
        key: index,
        data: block.data,
        style: style ? _objectSpread$1({
          disable: style.disable
        }, style[block.type] || {}) : {}
      };
      return /*#__PURE__*/React.createElement(Components, props);
    }
  });
}

export default EditorRendererProvider;
