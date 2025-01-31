import './Gallery.scss'

import { observer } from 'mobx-react-lite'
import { FC } from 'react'

import { useArtworksContext } from '../store/artworksStore'
import { GalleryContainer } from './GalleryContainer'

export const Gallery: FC = observer(() => {
  const { error } = useArtworksContext()
  return (
    <section className="gallery-section">
      <div className="header-container">
        <p className="highlight">Topics for you</p>
        <h3>Our special gallery</h3>
      </div>

      <div className="gallery-container">
        {error ? <div>{error}</div> : <GalleryContainer />}
      </div>
    </section>
  )
})
