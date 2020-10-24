import React from 'react'
import PropTypes from 'prop-types'

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
  style = undefined,
  components = [],
}) => {
  const duplicates = components
    .reduce((acc, cur) => [...acc, cur.name], [])
    .some((name, index, array) => array.indexOf(name) !== index)

  if (duplicates) {
    console.error('React EditorJS Renderer: duplicates `names` in components')
    return <></>
  }

  const filteredDefaultComponents = !!components
    ? defaultComponents.filter(({ name }) => !components
      .reduce((acc, cur) => [...acc, cur.name], [])
      .includes(name)
    )
    : defaultComponents

  return data.blocks.map((block, index) => {
    const matchingComponent = [...filteredDefaultComponents, ...components]
      .find(({ name }) => name === block.type)

    if (matchingComponent) {
      const { component: Components } = matchingComponent
      const props = {
        key: index,
        data: block.data,
        style: style
          ? {
            disable: style.disable,
            ...(style[block.type] || {})
          }
          : {}
      }
      return <Components {...props} />
    }
  })
}

EditorRendererProvider.propTypes = {
  data: PropTypes.shape({
    blocks: PropTypes.array.isRequired
  }),
  components: PropTypes.PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired
  })),
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
