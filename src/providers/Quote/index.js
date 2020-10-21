import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import providerPropsConstructor from '../../utils/providerPropsConstructor'
import defaultStyle from './index.style'

const Quote = ({ data, style = {}, config = {} }) => {
  const getProps = providerPropsConstructor(defaultStyle, style, config)
  const blockquoteStyle = getProps('blockquote')
  const quoteBoxStyle = getProps('quote-box')

  const getAlignment = () => (data.alignment === 'center' ? 'center' : 'left')

  const contentStyle = {
    ...getProps('content'),
    textAlign: getAlignment()
  }
  const captionStyle = {
    ...getProps('caption'),
    textAlign: getAlignment()
  }

  const content = ReactHtmlParser(data.text)
  const caption = ReactHtmlParser(data.caption)

  return (
    <blockquote {...blockquoteStyle}>
      <div {...quoteBoxStyle}>
        <p {...contentStyle}>{content}</p>
        {caption && (
          <p {...captionStyle}>
            <small>
              <i>{caption}</i>
            </small>
          </p>
        )}
      </div>
    </blockquote>
  )
}

Quote.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    caption: PropTypes.string,
    alignment: PropTypes.oneOf(['left', 'center'])
  }).isRequired,
  style: PropTypes.object,
  config: PropTypes.object
}

export default Quote
