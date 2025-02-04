import './ArtworkPage.scss'

import { FC } from 'react'
import { useLocation } from 'react-router'
import { ArtworkDetailed } from 'src/components/ArtworkDetailed'
import { WithLoader } from 'src/components/WithLoader'
import { useFetchArtwork } from 'src/hooks/useFetchArtwork'

export const ArtworkPage: FC = () => {
  const id = Number(useLocation().pathname.replace(/\/artwork\//, ''))
  const { artwork, isLoading, error } = useFetchArtwork(id)
  return (
    <section className="artwork-section">
      <WithLoader isLoading={isLoading} error={error}>
        {artwork ? <ArtworkDetailed artwork={artwork} /> : null}
      </WithLoader>
    </section>
  )
}
