import { FC } from 'react'
import { Route, Routes } from 'react-router'

import { routes } from '../routes'

export const AppRouter: FC = () => {
  return (
    <main>
      <Routes>
        {routes.map(({ path, Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </main>
  )
}
