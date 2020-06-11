import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'

import Index from '~/pages/index'
import { div } from '~/test/utils'

const localVue = createLocalVue()

describe('Index', () => {
  it('renders to match snapshot', () => {
    const wrapper = shallowMount(Index, {
      localVue,
      stubs: {
        'nuxt-link': RouterLinkStub,
        'nuxt-child': div
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
