import { render, screen } from '@testing-library/react'
import { useFetchFavourites } from 'src/hooks/useFetchFavourites'
import { describe, expect, it, vi } from 'vitest'

import { FavouritesSection } from '.'

vi.mock('src/hooks/useFetchFavourites', () => ({
  useFetchFavourites: vi.fn(),
}))

vi.mock('src/components/WithLoader', () => ({
  WithLoader: ({ isLoading, error, children }) => {
    if (isLoading) return <div data-testid="loader"></div>
    if (error) return <div data-testid="error">{error}</div>
    return <>{children}</>
  },
}))

vi.mock('src/components/ArtworkCardList', () => ({
  ArtworkCardList: ({ artworks, variant }) => (
    <div data-testid="artwork-card-list">
      {artworks.map((artwork) => (
        <div key={artwork.id} data-testid={`artwork-card-${variant}`}>
          {artwork.title}
        </div>
      ))}
    </div>
  ),
}))

describe('FavouritesSection', () => {
  it('renders loader while fetching data', () => {
    useFetchFavourites.mockReturnValue({
      artworks: [],
      isLoading: true,
      error: '',
    })

    render(<FavouritesSection />)

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('renders error message when there is an error', () => {
    useFetchFavourites.mockReturnValue({
      artworks: [],
      isLoading: false,
      error: 'Error fetching data',
    })

    render(<FavouritesSection />)

    expect(screen.getByTestId('error')).toBeInTheDocument()
    expect(screen.getByText(/error fetching data/i)).toBeInTheDocument()
  })

  it('renders artwork card list when data is fetched successfully', () => {
    useFetchFavourites.mockReturnValue({
      artworks: [
        { id: 1, title: 'Artwork 1' },
        { id: 2, title: 'Artwork 2' },
        { id: 3, title: 'Artwork 3' },
      ],
      isLoading: false,
      error: '',
    })

    render(<FavouritesSection />)

    expect(screen.getByTestId('artwork-card-list')).toBeInTheDocument()
    expect(screen.getAllByTestId('artwork-card-small')).toHaveLength(3)
  })

  it('renders section headers', () => {
    useFetchFavourites.mockReturnValue({
      artworks: [],
      isLoading: false,
      error: '',
    })

    render(<FavouritesSection />)

    expect(screen.getByText(/here are your/i)).toBeInTheDocument()
    expect(screen.getByText(/saved by you/i)).toBeInTheDocument()
    expect(screen.getByText(/your favourites list/i)).toBeInTheDocument()
  })
})
