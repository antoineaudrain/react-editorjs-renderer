import React from 'react'
import PropTypes from 'prop-types'
import providerPropsConstructor from '../../utils/providerPropsConstructor'
import defaultStyle from './index.style'

const Delimiter = ({ style = {} }) => {
  const getProps = providerPropsConstructor(defaultStyle, style)
  const delimiterStyle = getProps('delimiter')

  return <div {...delimiterStyle} />
}

Delimiter.propTypes = {
  style: PropTypes.object
}

export default Delimiter
