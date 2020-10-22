import React from 'react'
import PropTypes from 'prop-types'

import Delimiter from './providers/Delimiter'
import Header from './providers/Header'
import Image from './providers/Image'
import List from './providers/List'
import Paragraph from './providers/Paragraph'
import Quote from './providers/Quote'

const providers = [
  { name: 'delimiter', component: Delimiter },
  { name: 'header', component: Header },
  { name: 'image', component: Image },
  { name: 'list', component: List },
  { name: 'paragraph', component: Paragraph },
  { name: 'quote', component: Quote },
]

const EditorRendererProvider = ({
  data,
  style = {},
  disableProviders = [],
  disableStyle = false,
}) => {
  return data.blocks.map((block, index) => {
    const enabledProviders = providers.filter(({ name }) => !disableProviders.includes(name))
    const matchingProvider = enabledProviders.find(({ name }) => name === block.type)

    if (matchingProvider) {
      const { component: Provider } = matchingProvider
      const props = {
        key: index,
        data: block.data,
        style: (!disableStyle && style[block.type]) || {},
      }

      return <Provider {...props} />
    }
  })
}

EditorRendererProvider.propTypes = {
  data: PropTypes.shape({
    blocks: PropTypes.array.isRequired
  }),
  disableProviders: PropTypes.array,
  disableStyle: PropTypes.bool,
  style: PropTypes.shape({
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
