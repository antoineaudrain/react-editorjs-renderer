import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import propsConstructor from '../../tools/propsConstructor'
import './index.css'

const Paragraph = ({ data, style = {} }) => {
  const getProps = propsConstructor(style)
  const paragraphStyle = getProps('paragraph')

  const content = ReactHtmlParser(data.text)

  return <p {...paragraphStyle}>{content}</p>
}

Paragraph.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired,
  style: PropTypes.object
}

export default Paragraph
