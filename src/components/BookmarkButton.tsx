import { FC } from 'react'

import { IFavorite } from '../types/types'

interface BookmarkButtonProps {
  isBookmarked: boolean
  setIsBookmarked: (isBookmarked: boolean) => void
  id: number
}

export const BookmarkButton: FC<BookmarkButtonProps> = ({
  isBookmarked,
  setIsBookmarked,
  id,
}) => {
  const handleClick = () => {
    const favourites: IFavorite[] = JSON.parse(
      sessionStorage.getItem('favourites') || '[]'
    )

    let newFavourites = []
    if (isBookmarked) {
      newFavourites = favourites.filter((item) => item.id !== id)
    } else {
      favourites.push({ id: id })
      newFavourites = favourites
    }
    sessionStorage.setItem('favourites', JSON.stringify(newFavourites))
    setIsBookmarked(!isBookmarked)
    console.log(sessionStorage.getItem('favourites'))
  }

  return (
    <button className="bookmark-btn" onClick={handleClick}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bookmark-icon"
      >
        <path
          d="M19.5 21.5L12.375 17.5L5.25 21.5V5.5C5.25 4.96957 5.46448 4.46086 5.84625 4.08579C6.22802 3.71071 6.74581 3.5 7.28571 3.5H17.4643C18.0042 3.5 18.522 3.71071 18.9038 4.08579C19.2855 4.46086 19.5 4.96957 19.5 5.5V21.5Z"
          stroke="#E0A449"
          fill={isBookmarked ? '#E0A449' : undefined}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
