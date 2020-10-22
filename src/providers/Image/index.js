import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import providerPropsConstructor from '../../utils/providerPropsConstructor'
import defaultStyle from './index.style'

const Image = ({ data, style = {} }) => {
  const getProps = providerPropsConstructor(defaultStyle, style)
  const figureStyle = getProps('figure')
  const imageStyle = getProps('image')
  const figcaptionStyle = getProps('figcaption')

  const caption = data.caption && ReactHtmlParser(data.caption)

  return (
    <figure {...figureStyle}>
      <img src={data.file.url} alt={data.caption || ''} {...imageStyle} />
      {caption && <figcaption {...figcaptionStyle}>{caption}</figcaption>}
    </figure>
  )
}

Image.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired,
    caption: PropTypes.string.isRequired,
    withBorder: PropTypes.bool.isRequired,
    stretched: PropTypes.bool.isRequired,
    withBackground: PropTypes.bool.isRequired
  }).isRequired,
  style: PropTypes.object
}

export default Image
