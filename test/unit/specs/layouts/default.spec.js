import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'

import Default from '~/layouts/default'
import { div } from '~/test/utils'

const localVue = createLocalVue()

describe('Default layout', () => {
  it('renders to match snapshot', () => {
    const wrapper = mount(Default, {
      localVue,
      stubs: {
        nuxt: div,
        'router-link': RouterLinkStub,
        'nuxt-link': RouterLinkStub,
        'nuxt-child': div
      },
      mocks: {
        $route: {
          query: {}
        }
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
