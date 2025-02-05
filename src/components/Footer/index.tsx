import './Footer.scss'

import { FC } from 'react'
import { Link } from 'react-router'

import { ModsenIcon } from '../../assets/Icons/ModsenIcon'
import { MuseumWithTextIcon } from '../../assets/Icons/MuseumWithTextIcon'

export const Footer: FC = () => {
  return (
    <footer>
      <div className="links-container">
        <Link className="logo" to="" data-testid="home-link">
          <MuseumWithTextIcon textColor="#393939" />
        </Link>
        <Link
          className="modsen-logo-link"
          to="https://www.modsen-software.com/"
          data-testid="modsen-link"
        >
          <ModsenIcon />
        </Link>
      </div>
    </footer>
  )
}
