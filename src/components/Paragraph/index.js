import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
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

  const content = ReactHtmlParser(data.text)

  return <p {...paragraphStyle}>{content}</p>
}

export default Paragraph
