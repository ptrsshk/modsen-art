import { FC, useState } from 'react'
import { MuseumIcon } from '../Icons/MuseumIcon'
import { ArtworkVariant } from '../../consts/ArtworkVariant'
import './Artwork.scss'
import { BookmarkIcon } from '../Icons/BookmarkIcon'

interface ArtworkProps {
  title: string
  artist_title: string
  is_public_domain: boolean
  image_id: string
  variant: ArtworkVariant
}

export const Artwork: FC<ArtworkProps> = ({
  title,
  artist_title,
  is_public_domain,
  image_id,
  variant,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const cutString = (string: string) => {
    return string.length >= 25 ? string.slice(0, 22) + '...' : string
  }

  return (
    <div
      className={variant === 'big' ? 'big artwork-card' : 'small artwork-card'}
    >
      {image_id ? (
        <img
          src={`https://www.artic.edu/iiif/2/${image_id}/full/200,/0/default.jpg`}
          alt="image"
          className="artwork-image"
        />
      ) : (
        <div className="museum-icon-container">
          <MuseumIcon />
        </div>
      )}
      <div className="artwork-description">
        <div className="description-container">
          <h5>{title ? cutString(title) : 'No information'}</h5>
          <p className="highlight">
            {artist_title ? cutString(artist_title) : 'No information'}
          </p>
          <p className="domen">{is_public_domain ? 'Public' : 'Private'}</p>
        </div>
        <button
          onClick={() => {
            setIsBookmarked(!isBookmarked)
          }}
        >
          <BookmarkIcon />
        </button>
      </div>
      {/* <p>{variant}</p> */}
    </div>
  )
}
