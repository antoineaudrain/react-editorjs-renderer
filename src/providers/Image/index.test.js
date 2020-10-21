import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Image from './index'

configure({ adapter: new Adapter() })

describe('Image provider:', () => {
  const image = shallow(
    <Image
      data={{
        file: { url: 'test' },
        caption: 'test',
        withBorder: false,
        stretched: false,
        withBackground: false
      }}
    />
  )
  const imageNoCaption = shallow(
    <Image
      data={{
        file: { url: 'test' },
        caption: '',
        withBorder: false,
        stretched: false,
        withBackground: false
      }}
    />
  )

  it('should match snapshot', () => expect(image).toMatchSnapshot())
  it('should match snapshot', () => expect(imageNoCaption).toMatchSnapshot())
})
