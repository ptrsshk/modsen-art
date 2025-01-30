import './Gallery.scss'

import { observer } from 'mobx-react-lite'
import { FC, useState } from 'react'

import { ArtworkVariant } from '../../constants/ArtworkVariant'
import { ArtworkCard } from '../ArtworkCard/ArtworkCard'
import { useArtworksContext } from '../store/artworksStore'
import { WithLoader } from '../WithLoader'
import { ArrowButton } from './ArrowButton'
import { PaginationButton } from './PaginationButton'

export const Gallery: FC = observer(() => {
  const [subPage, setSubPage] = useState(1)
  const subpages = [1, 2, 3, 4]
  const artworksStore = useArtworksContext()

  return (
    <section className="gallery-section">
      <div className="header-container">
        <p className="highlight">Topics for you</p>
        <h3>Our special gallery</h3>
      </div>

      <div className="gallery-container">
        <WithLoader isLoading={artworksStore.isLoading}>
          <div className="artworks-container">
            {artworksStore.artworks
              .slice(3 * (subPage - 1), 3 + 3 * (subPage - 1))
              .map((artwork) => {
                return (
                  <ArtworkCard
                    key={artwork.id}
                    {...artwork}
                    variant={ArtworkVariant.big}
                  />
                )
              })}
          </div>
        </WithLoader>

        <div className="gallery-pagination">
          {artworksStore.page !== 1 ? (
            <ArrowButton direction="left" setSubPage={setSubPage} />
          ) : null}
          {subpages.map((id) => (
            <PaginationButton
              key={id}
              setSubPage={setSubPage}
              subPage={subPage}
              id={id}
            />
          ))}
          {artworksStore.page < 10000 ? (
            <ArrowButton direction="right" setSubPage={setSubPage} />
          ) : null}
        </div>
      </div>
    </section>
  )
})
