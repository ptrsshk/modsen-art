import './ArtworkCard.scss'

import { FC, useCallback, useState } from 'react'
import { useNavigate } from 'react-router'
import { ArtworkVariant } from 'src/constants/ArtworkVariant'
import { IMAGE_URL, IS_PUBLIC_DOMAIN } from 'src/constants/consts'
import { IArtworkCard } from 'src/types'
import { checkIsFavourite } from 'src/utils/FavouritesManager'

import { MuseumIcon } from '../../assets/Icons/MuseumIcon'
import { BookmarkButton } from '../BookmarkButton'

interface ArtworkCardProps {
  artwork: IArtworkCard
  variant: ArtworkVariant
}

export const ArtworkCard: FC<ArtworkCardProps> = ({ artwork, variant }) => {
  const { id, artist_title, image_id, title, is_public_domain } = artwork
  const [isBookmarked, setIsBookmarked] = useState(checkIsFavourite(id))
  const setIsBoockmarkedCallback = useCallback((isBookmarked: boolean) => {
    setIsBookmarked(isBookmarked)
  }, [])
  const navigate = useNavigate()

  const cutString = (string: string) => {
    return string.length >= 25 ? string.slice(0, 22) + '...' : string
  }
  const handleCardClick = useCallback(() => {
    navigate(`/artwork/${id}`)
  }, [id, navigate])

  return (
    <div
      className={variant === 'big' ? 'big artwork-card' : 'small artwork-card'}
    >
      {image_id ? (
        <img
          src={
            variant === 'big'
              ? IMAGE_URL(image_id, 400)
              : IMAGE_URL(image_id, 100)
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
          <p className="domain">{IS_PUBLIC_DOMAIN(is_public_domain)}</p>
        </div>
        <BookmarkButton
          isBookmarked={isBookmarked}
          setIsBookmarked={setIsBoockmarkedCallback}
          id={id}
        />
      </div>
    </div>
  )
}
