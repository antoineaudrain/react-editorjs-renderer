import React from 'react'
import PropTypes from 'prop-types'
import propsConstructor from '../../tools/propsConstructor'
import defaultStyle from './index.style'

Header.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired
  }).isRequired,
  style: PropTypes.object
}

function Header({ data, style = {} }) {
  const getProps = propsConstructor(style, defaultStyle)
  const headerStyle = getProps('header')

  const content = { __html: data.text }

  switch (data.level) {
    case 1:
      return <h1 {...headerStyle} dangerouslySetInnerHTML={content} />
    case 2:
      return <h2 {...headerStyle} dangerouslySetInnerHTML={content} />
    case 3:
      return <h3 {...headerStyle} dangerouslySetInnerHTML={content} />
    case 4:
      return <h4 {...headerStyle} dangerouslySetInnerHTML={content} />
    case 5:
      return <h5 {...headerStyle} dangerouslySetInnerHTML={content} />
    default:
      return ''
  }
}

export default Header
