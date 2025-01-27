import { useLocation } from 'react-router'
import { Link } from 'react-router'
import { FAVOURITES_ROUTE } from '../../consts/routes'
import { HomeIcon } from '../Icons/HomeIcon'
import { BookmarkIcon } from '../Icons/BookmarkIcon'
import './Header.scss'
import { MuseumWithTextIcon } from '../Icons/MuseumWithTextIcon'
import { FC } from 'react'

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
