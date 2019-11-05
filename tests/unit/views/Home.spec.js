import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home', () => {
  const wrapper = shallowMount(Home)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
