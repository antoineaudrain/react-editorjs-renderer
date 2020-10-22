import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

import Delimiter from './components/Delimiter'
import Header from './components/Header'
import Image from './components/Image'
import List from './components/List'
import Paragraph from './components/Paragraph'
import Quote from './components/Quote'

const defaultComponents = [
  { name: 'delimiter', component: Delimiter },
  { name: 'paragraph', component: Paragraph },
  { name: 'header', component: Header },
  { name: 'image', component: Image },
  { name: 'quote', component: Quote },
  { name: 'list', component: List },
]

const EditorRendererProvider = ({
  data,
  style = {},
  components = null,
}) => {
  return data.blocks.map((block, index) => {
    const enabledDefaultComponents = components !== null
      ? defaultComponents.filter(({ name }) => components.includes(name))
      : defaultComponents
    const matchingComponent = enabledDefaultComponents.find(({ name }) => name === block.type)

    if (matchingComponent) {
      const { Components } = matchingComponent
      return <Components
        key={index}
        data={block.data}
        style={style[block.type] || {}}
      />
    }
  })
}

EditorRendererProvider.propTypes = {
  data: PropTypes.shape({
    blocks: PropTypes.array.isRequired
  }),
  components: PropTypes.array,
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
