import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'

import Inspire from '~/pages/inspire'
import { div } from '~/test/utils'

const localVue = createLocalVue()

describe('Inspire', () => {
  it('renders to match snapshot', () => {
    const wrapper = shallowMount(Inspire, {
      localVue,
      stubs: {
        'nuxt-link': RouterLinkStub,
        'nuxt-child': div
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
