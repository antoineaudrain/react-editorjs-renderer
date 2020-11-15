import React from 'react'
import PropTypes from 'prop-types'
import propsConstructor from '../../tools/propsConstructor'
import defaultStyle from './index.style'

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
  style: PropTypes.shape({
    figure: PropTypes.object,
    img: PropTypes.object,
    figcaption: PropTypes.object,
  })
}

function Image({ data, style = {} }) {
  const getProps = propsConstructor(style, defaultStyle)
  const filledStyle = getProps('image', 'filled')
  const imageStyle = getProps('image', 'image')
  const imagePictureStyle = getProps('image', 'image-picture')
  const captionStyle = getProps('image', 'caption')

  const caption = data.caption && { __html: data.caption }

  return (
    <div {...filledStyle}>
      <div {...imageStyle}>
        <img src={data.file.url} alt={data.caption || ''} {...imagePictureStyle} />
      </div>

      {caption && (
        <figcaption {...captionStyle} dangerouslySetInnerHTML={content} />
      )}
    </div>
  )
}

export default Image
