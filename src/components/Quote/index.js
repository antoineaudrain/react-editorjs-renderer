import React from 'react'
import PropTypes from 'prop-types'
import propsConstructor from '../../tools/propsConstructor'
import defaultStyle from './index.style'

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

function Quote({ data, style = {} }) {
  const getProps = propsConstructor(style, defaultStyle)
  const blockquoteStyle = getProps('quote', 'blockquote')
  const quoteInner = getProps('quote', 'inner')
  const contentStyle = getProps('quote', 'content')
  const captionStyle = getProps('quote', 'caption')

  const getAlignment = () => (data.alignment === 'center' ? 'center' : 'left')

  const content = { __html: data.text }
  const caption = { __html: data.caption }

  return (
    <blockquote {...blockquoteStyle}>
      <div {...quoteInner}>
        <p {...contentStyle} style={{ textAlign: getAlignment() }} dangerouslySetInnerHTML={content} />
        {caption && (
          <p {...captionStyle} style={{ textAlign: getAlignment() }}>
            <small>
              <i dangerouslySetInnerHTML={caption} />
            </small>
          </p>
        )}
      </div>
    </blockquote>
  )
}

export default Quote
