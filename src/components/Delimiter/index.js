import React from 'react'
import PropTypes from 'prop-types'
import propsConstructor from '../../tools/propsConstructor'
import defaultStyle from './index.style'

Delimiter.propTypes = {
  style: PropTypes.object
}

function Delimiter({ style = {} }) {
  const getProps = propsConstructor(style, defaultStyle)
  const delimiterStyle = getProps('delimiter')

  return <div {...delimiterStyle} />
}

export default Delimiter
