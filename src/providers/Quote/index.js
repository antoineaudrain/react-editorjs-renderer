import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import propsConstructor from '../../tools/propsConstructor'
import './index.css'

const Quote = ({ data, style = {} }) => {
  const getProps = propsConstructor(style)
  const blockquoteStyle = getProps('quote', 'blockquote')
  const quoteInner = getProps('quote', 'inner')
  const contentStyle = getProps('quote', 'content')
  const captionStyle = getProps('quote', 'caption')

  const getAlignment = () => (data.alignment === 'center' ? 'center' : 'left')

  const content = ReactHtmlParser(data.text)
  const caption = ReactHtmlParser(data.caption)

  return (
    <blockquote {...blockquoteStyle}>
      <div {...quoteInner}>
        <p {...contentStyle} style={{ textAlign: getAlignment() }}>{content}</p>
        {caption && (
          <p {...captionStyle} style={{ textAlign: getAlignment() }}>
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
  style: PropTypes.shape({
    blockquote: PropTypes.object,
    inner: PropTypes.object,
    content: PropTypes.object,
  })
}

export default Quote
