import { Routes, Route } from 'react-router'
import { MainPage } from '../pages/MainPage'
import { FavouritesPage } from '../pages/FavouritesPage'
import { FAVOURITES_ROUTE } from '../consts/routes'

export const AppRouter = () => {
  return (
    <main>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path={FAVOURITES_ROUTE} element={<FavouritesPage />} />
      </Routes>
    </main>
  )
}
