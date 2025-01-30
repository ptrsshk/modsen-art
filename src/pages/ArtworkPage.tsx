import './ArtworkPage.scss'

import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { fetchArtwork } from '../api'
import { ArtworkDetailed } from '../components/ArtworkDetailed/ArtworkDetailed'
import { IArtworkDetailed } from '../types/types'

export const ArtworkPage: FC = () => {
  const [loading, setLoading] = useState(false)
  const [artwork, setArtwork] = useState<IArtworkDetailed | null>()

  const id = Number(useLocation().pathname.replace(/\/artwork\//, ''))
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetchArtwork(id)
        setArtwork(res.data)
      } catch (error) {
        console.error('Fetch error: ', error)
        alert(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])
  console.log(artwork)
  return (
    <section className="artwork-section">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : artwork ? (
        <ArtworkDetailed {...artwork} />
      ) : null}
    </section>
  )
}
