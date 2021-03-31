import { render } from '@redwoodjs/testing'

import RouteAnnouncer from './RouteAnnouncer'

describe('RouteAnnouncer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RouteAnnouncer />)
    }).not.toThrow()
  })
})
