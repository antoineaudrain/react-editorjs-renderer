import React from 'react'
import PropTypes from 'prop-types'
import propsConstructor from '../../tools/propsConstructor'
import defaultStyle from './index.style'

Table.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string)
    ).isRequired,
  }).isRequired,
  style: PropTypes.shape({
    disable: PropTypes.bool,
    table: PropTypes.object,
    body: PropTypes.object,
    row: PropTypes.object,
    cell: PropTypes.object,
    content: PropTypes.object,
  })
}

function Table({ data, style = {} }) {
  const getProps = propsConstructor(style, defaultStyle)
  const tableStyle = getProps('quote', 'table')
  const tableBodyStyle = getProps('quote', 'body')
  const tableRowStyle = getProps('quote', 'row')
  const tableCellStyle = getProps('quote', 'cell')
  const tableContentStyle = getProps('quote', 'content')

  const content = data.content.map((row, index) => {
    return (
      <tr key={index} {...tableRowStyle}>
        {row.map((col, index) => {
          const content = col && { __html: col }
          return (
            <td key={index} {...tableCellStyle}>
              <div {...tableContentStyle} dangerouslySetInnerHTML={content} />
            </td>
          )}
        )}
      </tr>
    )
  })

  return (
    <table {...tableStyle}>
      <tbody {...tableBodyStyle}>
        {content}
      </tbody>
    </table>
  )
}

export default Table
