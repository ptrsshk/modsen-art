import './Header.scss'

import { FC, useState } from 'react'
import { Link } from 'react-router'

import { MuseumWithTextIcon } from '../../assets/Icons/MuseumWithTextIcon'
import { BurgerButton } from './BurgerButton'
import { NavLinksList } from './NavLinksList'

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header>
      <nav>
        <Link className="logo" to="">
          <MuseumWithTextIcon />
        </Link>
        <BurgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <NavLinksList isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>
    </header>
  )
}
