import { observer } from 'mobx-react-lite'
import { Dispatch, FC, SetStateAction } from 'react'

import { useArtworksContext } from '../../../../store/artworksStore'

interface PaginationButtonProps {
  id: number
  setSubPage: Dispatch<SetStateAction<number>>
  subPage: number
}

export const PaginationButton: FC<PaginationButtonProps> = observer(
  ({ id, setSubPage, subPage }) => {
    const { page } = useArtworksContext()
    const calculateSubpage = () => {
      return id + (page - 1) * 4
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
)
