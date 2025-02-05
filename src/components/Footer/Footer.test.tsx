import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

import { Footer } from '.'

describe('Footer', () => {
  it('renders footer with links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    const homeLink = screen.getByTestId('home-link')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')

    const modsenLink = screen.getByTestId('modsen-link')
    expect(modsenLink).toBeInTheDocument()
    expect(modsenLink).toHaveAttribute(
      'href',
      'https://www.modsen-software.com/'
    )
  })
})
