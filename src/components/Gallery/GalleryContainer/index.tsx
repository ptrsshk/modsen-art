import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import { ArtworkVariant } from '../../../constants/ArtworkVariant'
import { ArtworkCard } from '../../ArtworkCard/ArtworkCard'
import { useArtworksContext } from '../../store/artworksStore'
import { WithLoader } from '../../WithLoader'
import { ArrowButton } from './ArrowButton'
import { PaginationButton } from './PaginationButton'

export const GalleryContainer = observer(() => {
  const [subPage, setSubPage] = useState(1)
  const subpages = [1, 2, 3, 4]
  const firstBigCardIndex = 3 * (subPage - 1)
  const artworksStore = useArtworksContext()
  return (
    <>
      <WithLoader isLoading={artworksStore.isLoading}>
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
