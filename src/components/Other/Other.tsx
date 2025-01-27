import { IArtworkCard } from '../../types/types'
import { ArtworkCard } from '../ArtworkCard/ArtworkCard'
import { ArtworkVariant } from '../../consts/ArtworkVariant'
import './Other.scss'
import { FC } from 'react'

interface OtherProps {
  artworks: IArtworkCard[] | null | undefined
  loading: boolean
}

export const Other: FC<OtherProps> = ({ artworks, loading }) => {
  return (
    <section className="other-section">
      <div className="header-container">
        <p className="highlight">Here some more</p>
        <h3>Other topics for you</h3>
      </div>
      <div className="small-card-container">
        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {artworks
              ? artworks.slice().map((artwork) => {
                  return (
                    <ArtworkCard
                      key={artwork.id}
                      {...artwork}
                      variant={ArtworkVariant.small}
                    />
                  )
                })
              : 'something went wrong'}
          </>
        )}
      </div>
    </section>
  )
}
