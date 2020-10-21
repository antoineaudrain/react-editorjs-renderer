import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from './index'

configure({ adapter: new Adapter() })

describe('List provider:', () => {
  const orderedList = shallow(<List data={{ style: 'ordered', items: [] }} />)
  const unorderedList = shallow(
    <List data={{ style: 'unordered', items: ['test'] }} />
  )

  it('should match snapshot', () => expect(orderedList).toMatchSnapshot())
  it('should match snapshot', () => expect(unorderedList).toMatchSnapshot())
})
