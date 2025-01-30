import './Other.scss'

import { observer } from 'mobx-react-lite'
import { FC } from 'react'

import { ArtworkVariant } from '../../constants/ArtworkVariant'
import { ArtworkCard } from '../ArtworkCard/ArtworkCard'
import { useArtworksContext } from '../store/artworksStore'
import { WithLoader } from '../WithLoader'

export const Other: FC = observer(() => {
  const artworksStore = useArtworksContext()

  return (
    <section className="other-section">
      <div className="header-container">
        <p className="highlight">Here some more</p>
        <h3>Other topics for you</h3>
      </div>
      <div className="small-card-container">
        <WithLoader isLoading={artworksStore.isLoading}>
          {artworksStore.artworks
            .slice(3)
            .map(({ title, artist_title, image_id, is_public_domain, id }) => {
              return (
                <ArtworkCard
                  key={id}
                  id={id}
                  title={title}
                  artist_title={artist_title}
                  image_id={image_id}
                  is_public_domain={is_public_domain}
                  variant={ArtworkVariant.small}
                />
              )
            })}
        </WithLoader>
      </div>
    </section>
  )
})
