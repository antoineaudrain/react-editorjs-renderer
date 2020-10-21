import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './index'

configure({ adapter: new Adapter() })

describe('Header provider:', () => {
  const headerH1 = shallow(<Header data={{ text: 'test', level: 1 }} />)
  const headerH2 = shallow(<Header data={{ text: 'test', level: 2 }} />)
  const headerH3 = shallow(<Header data={{ text: 'test', level: 3 }} />)
  const headerH4 = shallow(<Header data={{ text: 'test', level: 4 }} />)
  const headerH5 = shallow(<Header data={{ text: 'test', level: 5 }} />)
  const headerH6 = shallow(<Header data={{ text: 'test', level: 6 }} />)

  it('should match snapshot', () => expect(headerH1).toMatchSnapshot())
  it('should match snapshot', () => expect(headerH2).toMatchSnapshot())
  it('should match snapshot', () => expect(headerH3).toMatchSnapshot())
  it('should match snapshot', () => expect(headerH4).toMatchSnapshot())
  it('should match snapshot', () => expect(headerH5).toMatchSnapshot())
  it('should match snapshot', () => expect(headerH6).toMatchSnapshot())
})
