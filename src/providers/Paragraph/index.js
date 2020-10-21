import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import providerPropsConstructor from '../../utils/providerPropsConstructor'
import defaultStyle from './index.style'

const Paragraph = ({ data, style = {}, config = {} }) => {
  const getProps = providerPropsConstructor(defaultStyle, style, config)
  const paragraphStyle = getProps('paragraph')

  const content = ReactHtmlParser(data.text)

  return <p {...paragraphStyle}>{content}</p>
}

Paragraph.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired,
  style: PropTypes.object,
  config: PropTypes.object
}

export default Paragraph
