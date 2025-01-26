import { FC, useState } from 'react'
import { IArtworkDetailed, IFavorite } from '../../types/types'
import { BookmarkButton } from '../BookmarkButton'
import { MuseumIcon } from '../Icons/MuseumIcon'

export const ArtworkDetailed: FC<IArtworkDetailed> = ({
  id,
  title,
  artist_display,
  artist_title,
  copyright_notice,
  date_display,
  department_title,
  dimensions,
  image_id,
  credit_line,
}) => {
  const checkIsBookmarked = () => {
    const favourites: IFavorite[] = JSON.parse(
      sessionStorage.getItem('favourites') || '[]'
    )
    return Boolean(
      favourites.find((item) => {
        return item.id === id
      })
    )
  }
  const [isBookmarked, setIsBookmarked] = useState(checkIsBookmarked)

  return (
    <>
      <div className="image-container">
        {image_id ? (
          <img
            src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
            alt="image"
            className="artwork-image"
          />
        ) : (
          <div className="museum-icon-container">
            <MuseumIcon />
          </div>
        )}
        <BookmarkButton
          setIsBookmarked={setIsBookmarked}
          isBookmarked={isBookmarked}
          id={id}
        />
      </div>
      <div className="data-container">
        <div className="main-data-container">
          <h3>{title}</h3>
          <p className="highlight">
            {artist_title ? artist_title : 'Unknown artist'}
          </p>
          <p className="year">{date_display ? date_display : 'Unknown date'}</p>
        </div>
        <div className="overview-container">
          <h3>Overview</h3>
          <p>
            <span className="highlight">Artist nacionality: </span>
            {artist_display
              ? artist_display.split(' ').length > 1
                ? artist_display.split('\n')[1]?.split(',')[0].trim()
                : artist_display
              : null}
          </p>
          <p>
            <span className="highlight">Dimensions: </span>
            {dimensions}
          </p>
          <p>
            <span className="highlight">Credit Line: </span>
            {credit_line}
          </p>
          <p>
            <span className="highlight">Repository: </span>
            {department_title}
          </p>
          <p>{copyright_notice ? copyright_notice : 'Public'}</p>
        </div>
      </div>
    </>
  )
}
