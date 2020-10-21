import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// import styles from './styles.module.css'

import Delimiter from './providers/Delimiter'
import Header from './providers/Header'
import Image from './providers/Image'
import List from './providers/List'
import Paragraph from './providers/Paragraph'
import Quote from './providers/Quote'

const defaultConfig = {
  disableDefaultStyle: false,
  delimiter: {},
  header: {},
  image: {},
  list: {},
  paragraph: {},
  quote: {}
}

const EditorRendererProvider = ({
  data,
  style = {},
  config = defaultConfig
}) => (
  <Fragment>
    {data.blocks.map((block, index) => {
      const getProps = (type) => {
        return {
          key: index,
          data: block.data,
          style: style[type] || {},
          config: {
            ...config[type],
            disableDefaultStyle: config.disableDefaultStyle
          }
        }
      }

      const delimiterProps = getProps('delimiter')
      const headerProps = getProps('header')
      const imageProps = getProps('image')
      const listProps = getProps('list')
      const paragraphProps = getProps('paragraph')
      const quoteProps = getProps('quote')

      switch (block.type) {
        case 'delimiter':
          return <Delimiter {...delimiterProps} />
        case 'header':
          return <Header {...headerProps} />
        case 'image':
          return <Image {...imageProps} />
        case 'list':
          return <List {...listProps} />
        case 'paragraph':
          return <Paragraph {...paragraphProps} />
        case 'quote':
          return <Quote {...quoteProps} />
        default:
          console.error(
            `React EditorJs Renderer: block ${block.type} is not supported`
          )
          return <></>
      }
    })}
  </Fragment>
)

EditorRendererProvider.propTypes = {
  data: PropTypes.shape({
    blocks: PropTypes.array.isRequired
  }),
  style: PropTypes.shape({
    delimiter: PropTypes.object,
    header: PropTypes.object,
    image: PropTypes.object,
    list: PropTypes.object,
    paragraph: PropTypes.object,
    quote: PropTypes.object
  }),
  config: PropTypes.shape({
    disableDefaultStyle: PropTypes.bool,
    delimiter: PropTypes.object,
    header: PropTypes.object,
    image: PropTypes.object,
    list: PropTypes.object,
    paragraph: PropTypes.object,
    quote: PropTypes.object
  })
}

export {
  EditorRendererProvider as default,
  Delimiter,
  Header,
  Image,
  List,
  Paragraph,
  Quote
}
