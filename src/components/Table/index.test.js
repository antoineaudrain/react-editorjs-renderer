import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Table from './index'

configure({ adapter: new Adapter() })

describe('Paragraph provider:', () => {
  const table = shallow(
    <Table data={{ text: 'test', alignment: 'left' }} />
  )

  it('should match snapshot', () => expect(table).toMatchSnapshot())
})
