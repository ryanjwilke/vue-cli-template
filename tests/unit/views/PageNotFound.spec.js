import { shallowMount } from '@vue/test-utils'
import PageNotFound from '@/views/PageNotFound.vue'

describe('PageNotFound', () => {
  const wrapper = shallowMount(PageNotFound)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
