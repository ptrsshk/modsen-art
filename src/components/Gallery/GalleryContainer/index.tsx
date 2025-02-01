import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { ArtworkCard } from 'src/components/ArtworkCard'
import { WithLoader } from 'src/components/WithLoader'
import { ArtworkVariant } from 'src/constants/ArtworkVariant'
import { useArtworksContext } from 'src/store/artworksStore'

import { ArrowButton } from './ArrowButton'
import { PaginationButton } from './PaginationButton'

export const GalleryContainer = observer(() => {
  const [subPage, setSubPage] = useState(1)
  const subpages = [1, 2, 3, 4]
  const firstBigCardIndex = 3 * (subPage - 1)
  const artworksStore = useArtworksContext()
  return (
    <>
      <WithLoader
        isLoading={artworksStore.isLoading}
        error={artworksStore.error}
      >
        <div className="artworks-container">
          {artworksStore.artworks
            .slice(firstBigCardIndex, firstBigCardIndex + 3)
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
    </>
  )
})
