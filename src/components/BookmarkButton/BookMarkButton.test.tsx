import { fireEvent, render, screen } from '@testing-library/react'
import { setIsFavourite } from 'src/utils/FavouritesManager'
import { describe, expect, it, Mock, vi } from 'vitest'

import { BookmarkButton } from '.'

vi.mock('src/utils/FavouritesManager', () => ({
  setIsFavourite: vi.fn(),
}))

describe('BookmarkButton', () => {
  const mockSetIsBookmarked = vi.fn()

  it('renders bookmark button', () => {
    render(
      <BookmarkButton
        isBookmarked={false}
        setIsBookmarked={mockSetIsBookmarked}
        id={1}
      />
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('bookmark-btn')
  })

  it('renders bookmark icon with correct fill when bookmarked', () => {
    render(
      <BookmarkButton
        isBookmarked={true}
        setIsBookmarked={mockSetIsBookmarked}
        id={1}
      />
    )

    const pathElement = screen.getByRole('button').querySelector('path')
    expect(pathElement).toHaveAttribute('fill', '#E0A449')
  })

  it('renders bookmark icon without fill when not bookmarked', () => {
    render(
      <BookmarkButton
        isBookmarked={false}
        setIsBookmarked={mockSetIsBookmarked}
        id={1}
      />
    )

    const pathElement = screen.getByRole('button').querySelector('path')
    expect(pathElement).not.toHaveAttribute('fill')
  })

  it('handles click and updates bookmark state', () => {
    ;(setIsFavourite as Mock).mockReturnValue(true)

    render(
      <BookmarkButton
        isBookmarked={false}
        setIsBookmarked={mockSetIsBookmarked}
        id={1}
      />
    )

    fireEvent.click(screen.getByRole('button'))
    expect(setIsFavourite).toHaveBeenCalledWith(false, 1)
    expect(mockSetIsBookmarked).toHaveBeenCalledWith(true)
  })
})
