import './Header.scss'

import { FC } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router'
import { FAVOURITES_ROUTE } from 'src/constants/consts'

import { BookmarkIcon } from '../../assets/Icons/BookmarkIcon'
import { HomeIcon } from '../../assets/Icons/HomeIcon'
import { MuseumWithTextIcon } from '../../assets/Icons/MuseumWithTextIcon'

export const Header: FC = () => {
  const location = useLocation()
  return (
    <header>
      <nav>
        <Link className="logo" to="">
          <MuseumWithTextIcon />
        </Link>
        <div className="links-container">
          {location.pathname === FAVOURITES_ROUTE ? (
            <Link className="navigation-link" to="">
              <HomeIcon />
              Home
            </Link>
          ) : null}
          <Link className="navigation-link" to={FAVOURITES_ROUTE}>
            <BookmarkIcon />
            Your favourites
          </Link>
        </div>
      </nav>
    </header>
  )
}
