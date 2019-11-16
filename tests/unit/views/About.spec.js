import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About', () => {
  const wrapper = shallowMount(About)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correctly with placeholder data', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it.skip('renders correctly with synca data', async () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
