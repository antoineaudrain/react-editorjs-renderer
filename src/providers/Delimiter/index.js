import React from 'react'
import PropTypes from 'prop-types'
import propsConstructor from '../../tools/propsConstructor'
import './index.css'

const Delimiter = ({ style = {} }) => {
  const getProps = propsConstructor(style)
  const delimiterStyle = getProps('delimiter')

  return <div {...delimiterStyle} />
}

Delimiter.propTypes = {
  style: PropTypes.object
}

export default Delimiter
