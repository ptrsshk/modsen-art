import { FC, useEffect, useState } from 'react'
import { IArtworkCard, IFavorite } from '../types/types'
import { fetchFavouriteArtwork } from '../api'
import { ArtworkCard } from '../components/ArtworkCard/ArtworkCard'
import { ArtworkVariant } from '../consts/ArtworkVariant'
import { BookmarkIcon } from '../components/Icons/BookmarkIcon'
import './FavouritesPage.scss'

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
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </section>
  )
}
