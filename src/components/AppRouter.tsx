import { Routes, Route } from 'react-router'
import { MainPage } from '../pages/MainPage'
import { FavouritesPage } from '../pages/FavouritesPage'
import { FAVOURITES_ROUTE } from '../consts/routes'
import { ArtworkPage } from '../pages/ArtworkPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const AppRouter = () => {
  return (
    <main>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path={FAVOURITES_ROUTE} element={<FavouritesPage />} />
        <Route path="/artwork/:id" element={<ArtworkPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </main>
  )
}
