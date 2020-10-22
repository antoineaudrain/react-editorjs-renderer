import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import propsConstructor from '../../tools/propsConstructor'
import './index.css'

const List = ({ data, style = {} }) => {
  const getProps = propsConstructor(style)
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

export default List
