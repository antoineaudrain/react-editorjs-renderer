import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import providerPropsConstructor from '../../tools/providerPropsConstructor'
import defaultStyle from './index.style'

const List = ({ data, style = {} }) => {
  const getProps = providerPropsConstructor(defaultStyle, style)
  const orderedListStyle = getProps('ordered-list')
  const unorderedListStyle = getProps('unordered-list')
  const itemStyle = getProps('item')

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
  style: PropTypes.object
}

export default List
