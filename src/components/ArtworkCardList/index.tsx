import { FC } from 'react'
import { ArtworkVariant } from 'src/constants/ArtworkVariant'
import { IArtworkCard } from 'src/types'

import { ArtworkCard } from '../ArtworkCard'

interface ArtworkCardListProps {
  artworks: IArtworkCard[]
  variant: ArtworkVariant
}

export const ArtworkCardList: FC<ArtworkCardListProps> = ({
  artworks,
  variant,
}) => {
  return (
    <>
      {artworks.map((artwork) => {
        return (
          <ArtworkCard key={artwork.id} artwork={artwork} variant={variant} />
        )
      })}
    </>
  )
}
