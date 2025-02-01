import { IFavorite } from 'src/types/types'

export const checkIsFavourite = (id: number) => {
  const favourites: IFavorite[] = JSON.parse(
    sessionStorage.getItem('favourites') || '[]'
  )
  return Boolean(
    favourites.find((item) => {
      return item.id === id
    })
  )
}

export const setIsFavourite = (isBookmarked: boolean, id: number) => {
  const favourites: IFavorite[] = JSON.parse(
    sessionStorage.getItem('favourites') || '[]'
  )
  let newFavourites = []
  if (isBookmarked) {
    newFavourites = favourites.filter((item) => item.id !== id)
  } else {
    favourites.push({ id: id })
    newFavourites = favourites
  }
  sessionStorage.setItem('favourites', JSON.stringify(newFavourites))
  return !isBookmarked
}
