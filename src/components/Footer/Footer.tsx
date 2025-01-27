import { Link } from 'react-router'
import './Footer.scss'
import { MuseumWithTextIcon } from '../Icons/MuseumWithTextIcon'
import { FC } from 'react'
import { ModsenIcon } from '../Icons/ModsenIcon'

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
