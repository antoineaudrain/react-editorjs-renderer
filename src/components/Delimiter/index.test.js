import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Delimiter from './index'

configure({ adapter: new Adapter() })

describe('Header provider:', () => {
  const delimiter = shallow(<Delimiter />)
  const disabledStyleDelimiter = shallow(
    <Delimiter config={{ disableDefaultStyle: true }} />
  )

  it('should match snapshot', () => expect(delimiter).toMatchSnapshot())
  it('should match snapshot', () =>
    expect(disabledStyleDelimiter).toMatchSnapshot())
})
