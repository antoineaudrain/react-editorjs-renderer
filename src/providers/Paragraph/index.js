import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import providerPropsConstructor from '../../tools/providerPropsConstructor'
import defaultStyle from './index.style'

const Paragraph = ({ data, style = {} }) => {
  const getProps = providerPropsConstructor(defaultStyle, style)
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
