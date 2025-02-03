import './BurgerButton.scss'

import { FC, useCallback } from 'react'

interface BurgerButtonProps {
  setIsMenuOpen: (isMenuOpen: boolean) => void
  isMenuOpen: boolean
}

export const BurgerButton: FC<BurgerButtonProps> = ({
  setIsMenuOpen,
  isMenuOpen,
}) => {
  const handleBurgerClick = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen, setIsMenuOpen])
  return (
    <div
      className={isMenuOpen ? 'burger-button active' : 'burger-button'}
      onClick={handleBurgerClick}
    ></div>
  )
}
