import './Gallery.scss'

import { observer } from 'mobx-react-lite'
import { FC } from 'react'

import { GalleryContainer } from './GalleryContainer'

export const Gallery: FC = observer(() => {
  return (
    <section className="gallery-section">
      <div className="header-container">
        <p className="highlight">Topics for you</p>
        <h3>Our special gallery</h3>
      </div>
      <div className="gallery-container">
        <GalleryContainer />
      </div>
    </section>
  )
})
