import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Quote from './index'

configure({ adapter: new Adapter() })

describe('Paragraph provider:', () => {
  const captionlessQuote = shallow(
    <Quote data={{ text: 'test', alignment: 'left' }} />
  )
  const quote = shallow(
    <Quote data={{ text: 'test', caption: 'test', alignment: 'center' }} />
  )

  it('should match snapshot', () => expect(captionlessQuote).toMatchSnapshot())
  it('should match snapshot', () => expect(quote).toMatchSnapshot())
})
