import { useEffect, useState } from 'react'

import { fetchArtwork } from '../api'
import { IArtworkDetailed } from '../types/types'

export const useFetchArtwork = (id: number) => {
  const [isLoading, setIsLoading] = useState(false)
  const [artwork, setArtwork] = useState<IArtworkDetailed | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const res = await fetchArtwork(id)
        setArtwork(res.data)
      } catch (error) {
        console.error('Fetch error: ', error)
        setError('Ошибка загрузки данных')
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
