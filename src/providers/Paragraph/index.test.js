import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Paragraph from './index'

configure({ adapter: new Adapter() })

describe('Paragraph provider:', () => {
  const paragraph = shallow(<Paragraph data={{ text: 'test' }} />)

  it('should match snapshot', () => expect(paragraph).toMatchSnapshot())
})
