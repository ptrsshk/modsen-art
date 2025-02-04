import { FC } from 'react'
import { useLocation } from 'react-router'
import { HOME_ROUTE } from 'src/constants/consts'
import { NavLinkVariant } from 'src/constants/NavLinkVariant'

import { NavLink } from './NavLink'

interface LinksListProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

export const NavLinksList: FC<LinksListProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const location = useLocation()
  return (
    <div
      className={isMenuOpen ? 'links-container menu-opened' : 'links-container'}
    >
      {location.pathname !== HOME_ROUTE ? (
        <NavLink type={NavLinkVariant.home} setIsMenuOpen={setIsMenuOpen} />
      ) : null}
      <NavLink type={NavLinkVariant.favourites} setIsMenuOpen={setIsMenuOpen} />
    </div>
  )
}
