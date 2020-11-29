import React from 'react'
import PropTypes from 'prop-types'
import propsConstructor from '../../tools/propsConstructor'
import defaultStyle from './index.style'

List.propTypes = {
  data: PropTypes.shape({
    style: PropTypes.oneOf(['ordered', 'unordered']).isRequired,
    items: PropTypes.array.isRequired
  }).isRequired,
  style: PropTypes.shape({
    disable: PropTypes.bool,
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
    const content = item && { __html: item }
    return (
      <li key={index} {...itemStyle} dangerouslySetInnerHTML={content} />
    )
  })

  return data.style === 'ordered' ? (
    <ol {...orderedListStyle}>{content}</ol>
  ) : (
    <ul {...unorderedListStyle}>{content}</ul>
  )
}

export default List
