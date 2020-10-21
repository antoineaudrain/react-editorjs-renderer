import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const providerPropsConstructor = (defaultStyle, customStyle, config) => type => {
  const baseStyle = !config.disableDefaultStyle && !customStyle[type] ? { ...defaultStyle[type],
    fontSize: '15px',
    color: '#313649',
    lineHeight: '1.6',
    letterSpacing: '.005em'
  } : {};
  return {
    style: { ...baseStyle,
      ...customStyle
    },
    class: `er-${type}`,
    ...config[type]
  };
};

const style = {
  delimiter: {
    width: '100%',
    linHeight: '1.6em',
    textAlign: 'center',
    padding: '.4em 0'
  },
  'delimiter::before': {
    display: 'inline-block',
    content: '***',
    fontSize: '30px',
    lineHeight: '65px',
    height: '30px',
    letterSpacing: '0.2em'
  }
};

const Delimiter = ({
  style: _style = {},
  config: _config = {}
}) => {
  const getProps = providerPropsConstructor(style, _style, _config);
  const delimiterStyle = getProps('delimiter');
  return /*#__PURE__*/React.createElement("div", delimiterStyle);
};

Delimiter.propTypes = {
  style: PropTypes.object,
  config: PropTypes.object
};

const style$1 = {
  header: {
    letterSpacing: '-.03em',
    padding: '1em 0',
    margin: 0,
    marginBottom: '-0.9em',
    lineHeight: '1.5em',
    outline: 'none'
  }
};

const Header = ({
  data,
  style: _style = {},
  config: _config = {}
}) => {
  const getProps = providerPropsConstructor(style$1, _style, _config);
  const headerStyle = getProps('header');
  const content = ReactHtmlParser(data.text);

  switch (data.level) {
    case 1:
      return /*#__PURE__*/React.createElement("h1", headerStyle, content);

    case 2:
      return /*#__PURE__*/React.createElement("h2", headerStyle, content);

    case 3:
      return /*#__PURE__*/React.createElement("h3", headerStyle, content);

    case 4:
      return /*#__PURE__*/React.createElement("h4", headerStyle, content);

    case 5:
      return /*#__PURE__*/React.createElement("h5", headerStyle, content);

    default:
      return /*#__PURE__*/React.createElement("h6", headerStyle, content);
  }
};

Header.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired
  }).isRequired,
  style: PropTypes.object,
  config: PropTypes.object
};

const style$2 = {
  figure: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '400px',
    overflow: 'hidden',
    backgroundColor: 'aliceblue',
    border: '1px solid #eee'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px'
  },
  figcaption: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    padding: '5px 10px',
    fontSize: '12px',
    backgroundColor: '#2d333a',
    color: 'white',
    borderRadius: '2px',
    cursor: 'default'
  }
};

const Image = ({
  data,
  style: _style = {},
  config: _config = {}
}) => {
  const getProps = providerPropsConstructor(style$2, _style, _config);
  const figureStyle = getProps('figure');
  const imageStyle = getProps('image');
  const figcaptionStyle = getProps('figcaption');
  const caption = data.caption && ReactHtmlParser(data.caption);
  return /*#__PURE__*/React.createElement("figure", figureStyle, /*#__PURE__*/React.createElement("img", Object.assign({
    src: data.file.url,
    alt: data.caption || ''
  }, imageStyle)), caption && /*#__PURE__*/React.createElement("figcaption", figcaptionStyle, caption));
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
  style: PropTypes.object,
  config: PropTypes.object
};

const style$3 = {
  'ordered-list': {
    padding: '.4em 0',
    margin: 0,
    paddingLeft: 40,
    outline: 'none',
    listStyle: 'disc'
  },
  'unordered-list': {
    padding: '.4em 0',
    margin: 0,
    paddingLeft: 40,
    outline: 'none',
    listStyle: 'decimal'
  },
  items: {
    padding: '5.5px 0 5.5px 3px',
    lineHeight: '1.6em'
  }
};

const List = ({
  data,
  style: _style = {},
  config: _config = {}
}) => {
  const getProps = providerPropsConstructor(style$3, _style, _config);
  const orderedListStyle = getProps('ordered-list');
  const unorderedListStyle = getProps('unordered-list');
  const itemStyle = getProps('item');
  const content = data.items.map((item, index) => {
    const content = ReactHtmlParser(item);
    return /*#__PURE__*/React.createElement("li", Object.assign({
      key: index
    }, itemStyle), content);
  });
  return data.style === 'ordered' ? /*#__PURE__*/React.createElement("ol", orderedListStyle, content) : /*#__PURE__*/React.createElement("ul", unorderedListStyle, content);
};

List.propTypes = {
  data: PropTypes.shape({
    style: PropTypes.oneOf(['ordered', 'unordered']).isRequired,
    items: PropTypes.array.isRequired
  }).isRequired,
  style: PropTypes.object,
  config: PropTypes.object
};

const style$4 = {
  paragraph: {
    lineHeight: '1.6em',
    outline: 'none',
    padding: '.4em 0'
  }
};

const Paragraph = ({
  data,
  style: _style = {},
  config: _config = {}
}) => {
  const getProps = providerPropsConstructor(style$4, _style, _config);
  const paragraphStyle = getProps('paragraph');
  const content = ReactHtmlParser(data.text);
  return /*#__PURE__*/React.createElement("p", paragraphStyle, content);
};

Paragraph.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired,
  style: PropTypes.object,
  config: PropTypes.object
};

const style$5 = {
  blockquote: {
    margin: 0,
    paddingLeft: 40
  },
  'quote-box': {
    borderLeft: '3px solid #C4C4C4',
    padding: '10px 12px 10px 40px'
  },
  content: {
    lineHeight: '1.6em',
    margin: '0 0 20px 0'
  },
  caption: {
    color: '#6E798C'
  }
};

const Quote = ({
  data,
  style: _style = {},
  config: _config = {}
}) => {
  const getProps = providerPropsConstructor(style$5, _style, _config);
  const blockquoteStyle = getProps('blockquote');
  const quoteBoxStyle = getProps('quote-box');

  const getAlignment = () => data.alignment === 'center' ? 'center' : 'left';

  const contentStyle = { ...getProps('content'),
    textAlign: getAlignment()
  };
  const captionStyle = { ...getProps('caption'),
    textAlign: getAlignment()
  };
  const content = ReactHtmlParser(data.text);
  const caption = ReactHtmlParser(data.caption);
  return /*#__PURE__*/React.createElement("blockquote", blockquoteStyle, /*#__PURE__*/React.createElement("div", quoteBoxStyle, /*#__PURE__*/React.createElement("p", contentStyle, content), caption && /*#__PURE__*/React.createElement("p", captionStyle, /*#__PURE__*/React.createElement("small", null, /*#__PURE__*/React.createElement("i", null, caption)))));
};

Quote.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    caption: PropTypes.string,
    alignment: PropTypes.oneOf(['left', 'center'])
  }).isRequired,
  style: PropTypes.object,
  config: PropTypes.object
};

const defaultConfig = {
  disableDefaultStyle: false,
  delimiter: {},
  header: {},
  image: {},
  list: {},
  paragraph: {},
  quote: {}
};

const EditorRendererProvider = ({
  data,
  style: _style = {},
  config: _config = defaultConfig
}) => /*#__PURE__*/React.createElement(Fragment, null, data.blocks.map((block, index) => {
  const getProps = type => {
    return {
      key: index,
      data: block.data,
      style: _style[type] || {},
      config: { ..._config[type],
        disableDefaultStyle: _config.disableDefaultStyle
      }
    };
  };

  const delimiterProps = getProps('delimiter');
  const headerProps = getProps('header');
  const imageProps = getProps('image');
  const listProps = getProps('list');
  const paragraphProps = getProps('paragraph');
  const quoteProps = getProps('quote');

  switch (block.type) {
    case 'delimiter':
      return /*#__PURE__*/React.createElement(Delimiter, delimiterProps);

    case 'header':
      return /*#__PURE__*/React.createElement(Header, headerProps);

    case 'image':
      return /*#__PURE__*/React.createElement(Image, imageProps);

    case 'list':
      return /*#__PURE__*/React.createElement(List, listProps);

    case 'paragraph':
      return /*#__PURE__*/React.createElement(Paragraph, paragraphProps);

    case 'quote':
      return /*#__PURE__*/React.createElement(Quote, quoteProps);

    default:
      console.error(`React EditorJs Renderer: block ${block.type} is not supported`);
      return /*#__PURE__*/React.createElement(Fragment, null);
  }
}));

EditorRendererProvider.propTypes = {
  data: PropTypes.shape({
    blocks: PropTypes.array.isRequired
  }),
  style: PropTypes.shape({
    delimiter: PropTypes.object,
    header: PropTypes.object,
    image: PropTypes.object,
    list: PropTypes.object,
    paragraph: PropTypes.object,
    quote: PropTypes.object
  }),
  config: PropTypes.shape({
    disableDefaultStyle: PropTypes.bool,
    delimiter: PropTypes.object,
    header: PropTypes.object,
    image: PropTypes.object,
    list: PropTypes.object,
    paragraph: PropTypes.object,
    quote: PropTypes.object
  })
};

export default EditorRendererProvider;
export { Delimiter, Header, Image, List, Paragraph, Quote };
//# sourceMappingURL=index.modern.js.map
