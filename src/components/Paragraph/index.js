import React from 'react'
import PropTypes from 'prop-types'
import propsConstructor from '../../tools/propsConstructor'
import defaultStyle from './index.style'

Paragraph.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired,
  style: PropTypes.object
}

function Paragraph({ data, style = {} }) {
  const getProps = propsConstructor(style, defaultStyle)
  const paragraphStyle = getProps('paragraph')

  const content = { __html: data.text }

  return <p {...paragraphStyle} dangerouslySetInnerHTML={content} />
}

export default Paragraph
