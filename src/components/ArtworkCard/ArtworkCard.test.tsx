import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { ArtworkVariant } from 'src/constants/ArtworkVariant'
import { IArtworkCard } from 'src/types'
import { checkIsFavourite, setIsFavourite } from 'src/utils/FavouritesManager'
import { describe, expect, it, vi } from 'vitest'

import { ArtworkCard } from '.'

vi.mock('src/utils/FavouritesManager', () => ({
  checkIsFavourite: vi.fn(),
  setIsFavourite: vi.fn(),
}))

const mockNavigate = vi.fn()
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

const mockArtwork: IArtworkCard = {
  id: 1,
  title: 'Artwork Title',
  artist_title: 'Artist Name',
  is_public_domain: true,
  image_id: 'image123',
}

describe('ArtworkCard', () => {
  it('renders artwork card with image', () => {
    ;(checkIsFavourite as vi.Mock).mockReturnValue(false)

    render(
      <MemoryRouter>
        <ArtworkCard artwork={mockArtwork} variant={ArtworkVariant.small} />
      </MemoryRouter>
    )

    expect(screen.getByAltText('image')).toBeInTheDocument()
    expect(screen.getByText(/artwork title/i)).toBeInTheDocument()
    expect(screen.getByText(/artist name/i)).toBeInTheDocument()
    expect(screen.getByText(/public/i)).toBeInTheDocument()
  })

  it('renders museum icon when image is not available', () => {
    const artworkWithoutImage = { ...mockArtwork, image_id: null }
    render(
      <MemoryRouter>
        <ArtworkCard
          artwork={artworkWithoutImage}
          variant={ArtworkVariant.small}
        />
      </MemoryRouter>
    )

    expect(screen.getByTestId('museum-icon')).toBeInTheDocument()
  })

  it('handles card click', () => {
    ;(checkIsFavourite as vi.Mock).mockReturnValue(false)
    render(
      <MemoryRouter>
        <ArtworkCard artwork={mockArtwork} variant={ArtworkVariant.small} />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByAltText('image'))
    expect(mockNavigate).toHaveBeenCalledWith('/artwork/1')
  })

  it('handles bookmark button click', () => {
    ;(checkIsFavourite as vi.Mock).mockReturnValue(false)
    render(
      <MemoryRouter>
        <ArtworkCard artwork={mockArtwork} variant={ArtworkVariant.small} />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByRole('button'))
    expect(setIsFavourite).toHaveBeenCalledWith(false, 1)
  })
})
