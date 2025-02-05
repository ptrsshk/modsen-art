import { useEffect, useState } from 'react'
import { fetchFavouriteArtworks } from 'src/api'
import { IArtworkCard } from 'src/types'
import { getFavourites } from 'src/utils/FavouritesManager'

export const useFetchFavourites = () => {
  const [artworks, setArtworks] = useState<IArtworkCard[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const favourites = getFavourites()
      setIsLoading(true)
      try {
        const artworksArr = await fetchFavouriteArtworks(favourites)
        setArtworks(artworksArr)
      } catch (error) {
        console.log(error)
        setError('Error fetching data')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  return { isLoading, artworks, error }
}
