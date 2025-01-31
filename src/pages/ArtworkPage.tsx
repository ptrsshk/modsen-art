import './ArtworkPage.scss'

import { FC } from 'react'
import { useLocation } from 'react-router'

import { ArtworkDetailed } from '../components/ArtworkDetailed/ArtworkDetailed'
import { WithLoader } from '../components/WithLoader'
import { useFetchArtwork } from '../hooks/useFetchArtwork'

export const ArtworkPage: FC = () => {
  const id = Number(useLocation().pathname.replace(/\/artwork\//, ''))
  const { artwork, isLoading } = useFetchArtwork(id)

  console.log(artwork)
  return (
    <section className="artwork-section">
      <WithLoader isLoading={isLoading}>
        {artwork ? <ArtworkDetailed {...artwork} /> : null}
      </WithLoader>
    </section>
  )
}
