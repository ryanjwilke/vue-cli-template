import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  const wrapper = shallowMount(HelloWorld, {
    propsData: {
      msg: 'Hello World',
    },
  })

  it('is a Vue instance', () => {
    expect(wrapper).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
