import { FC, useEffect, useState } from 'react'
import { MuseumIcon } from '../Icons/MuseumIcon'
import { ArtworkVariant } from '../../consts/ArtworkVariant'
import './ArtworkCard.scss'
import { useNavigate } from 'react-router'
import { BookmarkButton } from '../BookmarkButton'
import { IFavorite } from '../../types/types'

interface ArtworkCardProps {
  title: string
  artist_title: string
  is_public_domain: boolean
  image_id: string
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
  const navigate = useNavigate()

  useEffect(() => {}, [isBookmarked, id])

  checkIsBookmarked()
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
