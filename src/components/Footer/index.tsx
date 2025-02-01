import './Footer.scss'

import { FC } from 'react'
import { Link } from 'react-router'

import { ModsenIcon } from '../../assets/Icons/ModsenIcon'
import { MuseumWithTextIcon } from '../../assets/Icons/MuseumWithTextIcon'

export const Footer: FC = () => {
  return (
    <footer>
      <div className="links-container">
        <Link className="logo" to="">
          <MuseumWithTextIcon textColor="#393939" />
        </Link>
        <Link
          className="modsen-logo-link"
          to="https://www.modsen-software.com/"
        >
          <ModsenIcon />
        </Link>
      </div>
    </footer>
  )
}
