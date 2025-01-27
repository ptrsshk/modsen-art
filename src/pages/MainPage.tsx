import { useState, useEffect, FC } from 'react'
import { fetchArtworksWithPagination } from '../api'
import { Gallery } from '../components/Gallery/Gallery'
import { Other } from '../components/Other/Other'
import { SearchSection } from '../components/SearchSection/SearchSection'
import { IArtworkCard } from '../types/types'

export const MainPage: FC = () => {
  const [artworks, setArtworks] = useState<IArtworkCard[] | null>()
  const [page, setPage] = useState(1)
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

  return (
    <>
      <SearchSection />
      <Gallery
        page={page}
        setPage={setPage}
        artworks={artworks}
        loading={loading}
      />
      <Other artworks={artworks?.slice(3)} loading={loading} />
    </>
  )
}
