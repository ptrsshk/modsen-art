import {
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  TouchEvent,
  useState,
} from 'react'
import { ArtworkVariant } from '../../consts/ArtworkVariant'
import { IArtworkCard } from '../../types/types'
import { ArtworkCard } from '../ArtworkCard/ArtworkCard'
import './Gallery.scss'
import { ArrowIcon } from '../Icons/ArrowIcon'

interface GalleryProps {
  artworks: IArtworkCard[] | null | undefined
  page: number
  setPage: Dispatch<SetStateAction<number>>
  loading: boolean
}

export const Gallery: FC<GalleryProps> = ({
  artworks,
  page,
  setPage,
  loading,
}) => {
  const [subpage, setSubPage] = useState(1)

  const handleSubpageChange = (
    event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
  ) => {
    setSubPage(Number(event.currentTarget.id))
  }
  const isActiveSubPage = (current: number) => {
    return 'pagination-btn ' + (subpage === current ? 'active' : '')
  }
  const handleNextPage = () => {
    setPage(page + 1)
    setSubPage(1)
  }
  const handlePrevPage = () => {
    setPage(page - 1)
    setSubPage(1)
  }
  return (
    <section className="gallery-section">
      <div className="header-container">
        <p className="highlight">Topics for you</p>
        <h3>Our special gallery</h3>
      </div>
      <div className="gallery-container">
        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <div className="artworks-container">
              {artworks
                ? artworks
                    .slice(3 * (subpage - 1), 3 + 3 * (subpage - 1))
                    .map((artwork) => {
                      return (
                        <ArtworkCard
                          key={artwork.id}
                          {...artwork}
                          variant={ArtworkVariant.big}
                        />
                      )
                    })
                : 'loading'}
            </div>
          </>
        )}
        <div className="gallery-pagination">
          {page !== 1 ? (
            <button className="pagination-btn arrow" onClick={handlePrevPage}>
              <ArrowIcon rotate={180} />
            </button>
          ) : null}

          <button
            className={isActiveSubPage(1)}
            id="1"
            onClick={handleSubpageChange}
          >
            {1 + (page - 1) * 4}
          </button>
          <button
            className={isActiveSubPage(2)}
            id="2"
            onClick={handleSubpageChange}
          >
            {2 + (page - 1) * 4}
          </button>
          <button
            className={isActiveSubPage(3)}
            id="3"
            onClick={handleSubpageChange}
          >
            {3 + (page - 1) * 4}
          </button>
          <button
            className={isActiveSubPage(4)}
            id="4"
            onClick={handleSubpageChange}
          >
            {4 + (page - 1) * 4}
          </button>
          <button className="pagination-btn arrow" onClick={handleNextPage}>
            <ArrowIcon rotate={0} />
          </button>
        </div>
      </div>
    </section>
  )
}
