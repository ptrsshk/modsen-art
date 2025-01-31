import './ArtworkCard.scss'

import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { ArtworkVariant } from '../../constants/ArtworkVariant'
import { checkIsFavourite } from '../../utils/FavouritesManager'
import { BookmarkButton } from '../BookmarkButton'
import { MuseumIcon } from '../Icons/MuseumIcon'

interface ArtworkCardProps {
  title: string | null
  artist_title: string | null
  is_public_domain: boolean | null
  image_id: string | null
  variant: ArtworkVariant
  id: number
}

export const ArtworkCard: FC<ArtworkCardProps> = ({
  title,
  artist_title,
  is_public_domain,
  image_id,
  variant,
  id,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(checkIsFavourite(id))
  const navigate = useNavigate()

  useEffect(() => {}, [isBookmarked, id])

  const cutString = (string: string) => {
    return string.length >= 25 ? string.slice(0, 22) + '...' : string
  }
  const handleCardClick = () => {
    navigate(`/artwork/${id}`)
  }

  return (
    <div
      className={variant === 'big' ? 'big artwork-card' : 'small artwork-card'}
    >
      {image_id ? (
        <img
          src={
            variant === 'big'
              ? `https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`
              : `https://www.artic.edu/iiif/2/${image_id}/full/100,/0/default.jpg`
          }
          alt="image"
          className="artwork-image"
          onClick={handleCardClick}
        />
      ) : (
        <div className="museum-icon-container" onClick={handleCardClick}>
          <MuseumIcon />
        </div>
      )}
      <div className="artwork-description">
        <div className="description-container" onClick={handleCardClick}>
          <h5>{title ? cutString(title) : 'No information'}</h5>
          <p className="highlight">
            {artist_title ? cutString(artist_title) : 'No information'}
          </p>
          <p className="domain">{is_public_domain ? 'Public' : 'Private'}</p>
        </div>
        <BookmarkButton
          isBookmarked={isBookmarked}
          setIsBookmarked={setIsBookmarked}
          id={id}
        />
      </div>
    </div>
  )
}
