import { useEffect, useState } from 'react'

import { fetchArtwork } from '../api'
import { IArtworkDetailed } from '../types/types'

export const useFetchArtwork = (id: number) => {
  const [isLoading, setIsLoading] = useState(false)
  const [artwork, setArtwork] = useState<IArtworkDetailed | null>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError('')
      try {
        const res = await fetchArtwork(id)
        setArtwork(res.data)
      } catch (error) {
        console.error('Fetch error: ', error)
        setError('Error in fetching data')
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchData()
    }
  }, [id])

  return { isLoading, artwork, error }
}
