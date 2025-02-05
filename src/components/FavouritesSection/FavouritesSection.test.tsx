import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { useFetchFavourites } from 'src/hooks/useFetchFavourites'
import { IArtworkCard } from 'src/types'
import { describe, expect, it, vi } from 'vitest'

import { FavouritesSection } from '.'

// Mock the useFetchFavourites hook
vi.mock('src/hooks/useFetchFavourites', () => ({
  useFetchFavourites: vi.fn(),
}))

describe('FavouritesSection', () => {
  it('renders loader while fetching data', () => {
    ;(useFetchFavourites as ReturnType<typeof vi.fn>).mockReturnValue({
      artworks: [],
      isLoading: true,
      error: '',
    })

    render(
      <MemoryRouter>
        <FavouritesSection />
      </MemoryRouter>
    )

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('renders error message when there is an error', () => {
    ;(useFetchFavourites as ReturnType<typeof vi.fn>).mockReturnValue({
      artworks: [],
      isLoading: false,
      error: 'Error fetching data',
    })

    render(
      <MemoryRouter>
        <FavouritesSection />
      </MemoryRouter>
    )

    expect(screen.getByTestId('error')).toBeInTheDocument()
    expect(screen.getByText(/error fetching data/i)).toBeInTheDocument()
  })

  it('renders artwork card list when data is fetched successfully', () => {
    const mockArtworks: IArtworkCard[] = [
      {
        id: 1,
        title: 'Artwork 1',
        artist_title: 'Artist 1',
        is_public_domain: true,
        image_id: 'image1',
      },
      {
        id: 2,
        title: 'Artwork 2',
        artist_title: 'Artist 2',
        is_public_domain: true,
        image_id: 'image2',
      },
    ]

    ;(useFetchFavourites as ReturnType<typeof vi.fn>).mockReturnValue({
      artworks: mockArtworks,
      isLoading: false,
      error: '',
    })

    render(
      <MemoryRouter>
        <FavouritesSection />
      </MemoryRouter>
    )

    expect(screen.getByTestId('artwork-card-list')).toBeInTheDocument()
    expect(screen.getAllByTestId('artwork-card-small')).toHaveLength(2)
  })

  it('renders section headers', () => {
    ;(useFetchFavourites as ReturnType<typeof vi.fn>).mockReturnValue({
      artworks: [],
      isLoading: false,
      error: '',
    })

    render(
      <MemoryRouter>
        <FavouritesSection />
      </MemoryRouter>
    )

    expect(screen.getByText(/here are your/i)).toBeInTheDocument()
    expect(screen.getByText(/saved by you/i)).toBeInTheDocument()
    expect(screen.getByText(/your favourites list/i)).toBeInTheDocument()
  })
})
