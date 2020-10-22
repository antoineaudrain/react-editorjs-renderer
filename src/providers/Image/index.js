import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import propsConstructor from '../../tools/propsConstructor'
import './index.css'

const Image = ({ data, style = {} }) => {
  const getProps = propsConstructor(style)
  const figureStyle = getProps('image', 'figure')
  const imageStyle = getProps('image', 'img')
  const figcaptionStyle = getProps('image', 'figcaption')

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
