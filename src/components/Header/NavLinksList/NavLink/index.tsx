import { FC, useCallback } from 'react'
import { Link } from 'react-router'
import { BookmarkIcon } from 'src/assets/Icons/BookmarkIcon'
import { HomeIcon } from 'src/assets/Icons/HomeIcon'
import { FAVOURITES_ROUTE, HOME_ROUTE } from 'src/constants/consts'
import { NavLinkVariant } from 'src/constants/NavLinkVariant'

interface NavLinkProps {
  setIsMenuOpen: (isMenuOpen: boolean) => void
  type: NavLinkVariant
}

export const NavLink: FC<NavLinkProps> = ({ type, setIsMenuOpen }) => {
  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false)
  }, [setIsMenuOpen])

  return (
    <Link
      className="navigation-link"
      to={type === NavLinkVariant.home ? HOME_ROUTE : FAVOURITES_ROUTE}
      onClick={handleLinkClick}
    >
      {type === NavLinkVariant.home ? <HomeIcon /> : <BookmarkIcon />}
      {type}
    </Link>
  )
}
