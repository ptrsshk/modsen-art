import {
  ALL_ROUTE,
  ARTWORK_ROUTE,
  FAVOURITES_ROUTE,
  HOME_ROUTE,
} from './constants/consts'
import { ArtworkPage } from './pages/ArtworkPage'
import { FavouritesPage } from './pages/FavouritesPage'
import { MainPage } from './pages/MainPage'
import { NotFoundPage } from './pages/NotFoundPage'

export const routes = [
  {
    path: HOME_ROUTE,
    Element: MainPage,
  },
  {
    path: ARTWORK_ROUTE,
    Element: ArtworkPage,
  },
  {
    path: FAVOURITES_ROUTE,
    Element: FavouritesPage,
  },
  {
    path: ALL_ROUTE,
    Element: NotFoundPage,
  },
]
