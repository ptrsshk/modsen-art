import './FavouritesPage.scss'

import { FC, useEffect, useState } from 'react'

import { fetchFavouriteArtwork } from '../api'
import { ArtworkCard } from '../components/ArtworkCard/ArtworkCard'
import { BookmarkIcon } from '../components/Icons/BookmarkIcon'
import { WithLoader } from '../components/WithLoader'
import { ArtworkVariant } from '../constants/ArtworkVariant'
import { IArtworkCard, IFavorite } from '../types/types'

export const FavouritesPage: FC = () => {
  const [artworks, setArtworks] = useState<IArtworkCard[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const favourites: IFavorite[] = JSON.parse(
        sessionStorage.getItem('favourites') || '[]'
      )
      setLoading(true)
      try {
        const artworksArr = await Promise.all(
          favourites.map((favourite) =>
            fetchFavouriteArtwork(favourite.id).then((res) => res.data)
          )
        )
        setArtworks(artworksArr)
      } catch (error) {
        console.error('Fetch error: ', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return (
    <section className="favourites-section">
      <h1>
        Here are your
        <br />
        <span className="highlight">
          <BookmarkIcon />
          Favourites
        </span>
      </h1>
      <div className="header-container">
        <p className="highlight">Saved by you</p>
        <h3>Your favourites list</h3>
      </div>
      {
        <WithLoader isLoading={loading}>
          <div className="small-card-container">
            {artworks
              ? artworks.map((artwork) => {
                  return (
                    <ArtworkCard
                      key={artwork.id}
                      {...artwork}
                      variant={ArtworkVariant.small}
                    />
                  )
                })
              : 'loading'}
          </div>
        </WithLoader>
      }
    </section>
  )
}
