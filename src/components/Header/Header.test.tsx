import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { BrowserRouter, MemoryRouter, Router } from 'react-router'
import { describe, expect, it } from 'vitest'

import { Header } from '.'

describe('Header', () => {
  it('renders header with favourite Link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    const favouritesLink = screen.getByRole('link', {
      name: /your favourites/i,
    })
    expect(favouritesLink).toBeInTheDocument()
    expect(favouritesLink).toHaveAttribute('href', '/favourites')
  })
  it('renders Home link when not on the root path', () => {
    render(
      <MemoryRouter initialEntries={['/some-other-path']}>
        <Header />
      </MemoryRouter>
    )

    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
describe('Header Navigation', () => {
  it('navigates to favourites when the link is clicked', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    )

    const favouritesLink = screen.getByRole('link', {
      name: /your favourites/i,
    })
    expect(favouritesLink).toBeInTheDocument()

    favouritesLink.click()

    expect(history.location.pathname).toBe('/favourites')
  })
  it('navigates to home when the Home link is clicked from Artwork page', () => {
    const history = createMemoryHistory({ initialEntries: ['/artwork/34563'] })
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    )

    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink).toBeInTheDocument()

    homeLink.click()

    expect(history.location.pathname).toBe('/')
  })
})
