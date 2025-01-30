import { FC } from 'react'
import { Route, Routes } from 'react-router'

import { FAVOURITES_ROUTE } from '../consts/routes'
import { ArtworkPage } from '../pages/ArtworkPage'
import { FavouritesPage } from '../pages/FavouritesPage'
import { MainPage } from '../pages/MainPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const AppRouter: FC = () => {
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
