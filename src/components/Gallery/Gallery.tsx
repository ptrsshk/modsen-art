import { FC, MouseEvent, TouchEvent, useEffect, useState } from 'react'
import { ArtworkVariant } from '../../consts/ArtworkVariant'
import { IArtwork } from '../../types/types'
import { Artwork } from '../Artwork/Artwork'
import './Gallery.scss'
import { fetchArtworksWithPagination } from '../../api'
import { ArrowIcon } from '../Icons/ArrowIcon'

export const Gallery: FC = () => {
  const [artworks, setArtworks] = useState<IArtwork[] | null>()
  const [page, setPage] = useState(1)
  const [subpage, setSubPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetchArtworksWithPagination(page)
        setArtworks(res.data)
      } catch (error) {
        console.error('Fetch error: ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [page])

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
          <div className="loader"></div>
        ) : (
          <>
            <div className="artworks-container">
              {artworks
                ? artworks
                    .slice(3 * (subpage - 1), 3 + 3 * (subpage - 1))
                    .map((artwork) => {
                      return (
                        <Artwork
                          key={artwork.id}
                          {...artwork}
                          variant={ArtworkVariant.big}
                        />
                      )
                    })
                : 'loading'}
            </div>
            <div className="gallery-pagination">
              {page !== 1 ? (
                <button
                  className="pagination-btn arrow"
                  onClick={handlePrevPage}
                >
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
                <ArrowIcon />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
