import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { useFetchArtwork } from 'src/hooks/useFetchArtwork'
import { IArtworkDetailed } from 'src/types'
import { describe, expect, it, vi } from 'vitest'

import { ArtworkDetailedSection } from '.'

// Mock the useFetchArtwork hook
vi.mock('src/hooks/useFetchArtwork', () => ({
  useFetchArtwork: vi.fn(),
}))

describe('ArtworkDetailedSection', () => {
  it('renders loader while fetching data', () => {
    ;(useFetchArtwork as ReturnType<typeof vi.fn>).mockReturnValue({
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
    ;(useFetchArtwork as ReturnType<typeof vi.fn>).mockReturnValue({
      artwork: null,
      isLoading: false,
      error: 'Error in fetching data',
    })

    render(
      <MemoryRouter initialEntries={['/artwork/123']}>
        <ArtworkDetailedSection />
      </MemoryRouter>
    )

    expect(screen.getByTestId('error')).toBeInTheDocument()
    expect(screen.getByText(/error in fetching data/i)).toBeInTheDocument()
  })

  it('renders artwork details when data is fetched successfully', () => {
    ;(useFetchArtwork as ReturnType<typeof vi.fn>).mockReturnValue({
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
      } as IArtworkDetailed,
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
