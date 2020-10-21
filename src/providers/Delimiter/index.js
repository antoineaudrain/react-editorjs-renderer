import React from 'react'
import PropTypes from 'prop-types'
import providerPropsConstructor from '../../utils/providerPropsConstructor'
import defaultStyle from './index.style'

const Delimiter = ({ style = {}, config = {} }) => {
  const getProps = providerPropsConstructor(defaultStyle, style, config)
  const delimiterStyle = getProps('delimiter')

  return <div {...delimiterStyle} />
}

Delimiter.propTypes = {
  style: PropTypes.object,
  config: PropTypes.object
}

export default Delimiter
