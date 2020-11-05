import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import propsConstructor from '../../tools/propsConstructor'
import defaultStyle from './index.style'

List.propTypes = {
  data: PropTypes.shape({
    style: PropTypes.oneOf(['ordered', 'unordered']).isRequired,
    items: PropTypes.array.isRequired
  }).isRequired,
  style: PropTypes.shape({
    ol: PropTypes.object,
    ul: PropTypes.object,
    li: PropTypes.object,
  })
}

function List({ data, style = {} }) {
  const getProps = propsConstructor(style, defaultStyle)
  const orderedListStyle = getProps('list', 'ol')
  const unorderedListStyle = getProps('list', 'ul')
  const itemStyle = getProps('list', 'li')

  const content = data.items.map((item, index) => {
    const content = ReactHtmlParser(item)
    return (
      <li key={index} {...itemStyle}>
        {content}
      </li>
    )
  })

  return data.style === 'ordered' ? (
    <ol {...orderedListStyle}>{content}</ol>
  ) : (
    <ul {...unorderedListStyle}>{content}</ul>
  )
}

export default List
