import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import providerPropsConstructor from '../../utils/providerPropsConstructor'
import defaultStyle from './index.style'

const Header = ({ data, style = {} }) => {
  const getProps = providerPropsConstructor(defaultStyle, style)
  const headerStyle = getProps('header')

  const content = ReactHtmlParser(data.text)

  switch (data.level) {
    case 1:
      return <h1 {...headerStyle}>{content}</h1>
    case 2:
      return <h2 {...headerStyle}>{content}</h2>
    case 3:
      return <h3 {...headerStyle}>{content}</h3>
    case 4:
      return <h4 {...headerStyle}>{content}</h4>
    case 5:
      return <h5 {...headerStyle}>{content}</h5>
    default:
      return ''
  }
}

Header.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired
  }).isRequired,
  style: PropTypes.object
}

export default Header
