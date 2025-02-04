import { FC } from 'react'
import { BookmarkIcon } from 'src/assets/Icons/BookmarkIcon'
import { ArtworkCardList } from 'src/components/ArtworkCardList'
import { WithLoader } from 'src/components/WithLoader'
import { ArtworkVariant } from 'src/constants/ArtworkVariant'
import { useFetchFavourites } from 'src/hooks/useFetchFavourites'

export const FavouritesSection: FC = () => {
  const { artworks, isLoading, error } = useFetchFavourites()
  return (
    <>
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
          <WithLoader isLoading={isLoading} error={error}>
            <div className="small-card-container">
              <ArtworkCardList
                artworks={artworks}
                variant={ArtworkVariant.small}
              />
            </div>
          </WithLoader>
        }
      </section>
    </>
  )
}
