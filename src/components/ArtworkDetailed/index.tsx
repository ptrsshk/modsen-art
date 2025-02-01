import { FC, useState } from 'react'
import { IMAGE_URL } from 'src/constants/consts'
import { IArtworkDetailed } from 'src/types/types'
import { checkIsFavourite } from 'src/utils/FavouritesManager'

import { MuseumIcon } from '../../assets/Icons/MuseumIcon'
import { BookmarkButton } from '../BookmarkButton'

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
  const [isBookmarked, setIsBookmarked] = useState(checkIsFavourite(id))

  return (
    <>
      <div className="image-container">
        {image_id ? (
          <img
            src={IMAGE_URL(image_id, 400)}
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
