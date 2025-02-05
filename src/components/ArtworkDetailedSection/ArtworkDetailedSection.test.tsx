import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { useFetchArtwork } from 'src/hooks/useFetchArtwork'
import { describe, expect, it, vi } from 'vitest'

import { ArtworkDetailedSection } from '.'

vi.mock('src/hooks/useFetchArtwork')

describe('ArtworkDetailedSection', () => {
  it('renders loader while fetching data', () => {
    useFetchArtwork.mockReturnValue({
      artwork: null,
      isLoading: true,
      error: '',
    })

    render(
      <MemoryRouter initialEntries={['/artwork/123']}>
        <ArtworkDetailedSection />
      </MemoryRouter>
    )

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('renders error message when there is an error', () => {
    useFetchArtwork.mockReturnValue({
      artwork: null,
      isLoading: false,
      error: 'Error in fetching data',
    })

    render(
      <MemoryRouter initialEntries={['/artwork/123']}>
        <ArtworkDetailedSection />
      </MemoryRouter>
    )

    expect(screen.getByText(/error in fetching data/i)).toBeInTheDocument()
  })

  it('renders artwork details when data is fetched successfully', () => {
    useFetchArtwork.mockReturnValue({
      artwork: {
        id: 123,
        title: 'Artwork Title',
        artist_title: 'Artist Name',
        is_public_domain: true,
        image_id: 'image123',
        date_display: '2023',
        artist_display: 'Artist Display',
        dimensions: 'Dimensions',
        credit_line: 'Credit Line',
        department_title: 'Department Title',
        copyright_notice: 'Public',
      },
      isLoading: false,
      error: '',
    })

    render(
      <MemoryRouter initialEntries={['/artwork/123']}>
        <ArtworkDetailedSection />
      </MemoryRouter>
    )

    expect(screen.getByText(/artwork title/i)).toBeInTheDocument()
    expect(screen.getByText(/artist name/i)).toBeInTheDocument()
    expect(screen.getByText(/2023/i)).toBeInTheDocument()
  })
})
