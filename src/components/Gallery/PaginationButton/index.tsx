import { Dispatch, FC, SetStateAction } from 'react'

import { useArtworksContext } from '../../store/artworksStore'

interface PaginationButtonProps {
  id: number
  setSubPage: Dispatch<SetStateAction<number>>
  subPage: number
}

export const PaginationButton: FC<PaginationButtonProps> = ({
  id,
  setSubPage,
  subPage,
}) => {
  const artworksStore = useArtworksContext()
  const calculateSubpage = () => {
    return id + (artworksStore.page - 1) * 4
  }
  return (
    <button
      className={'pagination-btn ' + (subPage === id ? 'active' : '')}
      onClick={() => {
        setSubPage(id)
      }}
    >
      {calculateSubpage()}
    </button>
  )
}
