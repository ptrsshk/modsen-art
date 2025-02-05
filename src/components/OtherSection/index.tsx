import './Other.scss'

import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { ArtworkVariant } from 'src/constants/ArtworkVariant'
import { useArtworksContext } from 'src/store/artworksStore'

import { ArtworkCardList } from '../ArtworkCardList'
import { WithLoader } from '../WithLoader'

export const Other: FC = observer(() => {
  const { artworks, error, isLoading } = useArtworksContext()
  return (
    <section className="other-section">
      <div className="header-container">
        <p className="highlight">Here some more</p>
        <h3>Other topics for you</h3>
      </div>
      <div className="small-card-container">
        <WithLoader isLoading={isLoading} error={error}>
          <ArtworkCardList
            artworks={artworks.slice(3)}
            variant={ArtworkVariant.small}
          />
        </WithLoader>
      </div>
    </section>
  )
})
