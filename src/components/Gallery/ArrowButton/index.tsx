import { observer } from 'mobx-react-lite'
import { Dispatch } from 'react'

import { ArrowIcon } from '../../Icons/ArrowIcon'
import { useArtworksContext } from '../../store/artworksStore'

interface ArrowButtonProps {
  direction: 'left' | 'right'
  setSubPage: Dispatch<React.SetStateAction<number>>
}

export const ArrowButton: React.FC<ArrowButtonProps> = observer(
  ({ direction, setSubPage }) => {
    const artworksStore = useArtworksContext()
    const handleChangePage = () => {
      artworksStore.setPage(
        direction === 'left' ? artworksStore.page - 1 : artworksStore.page + 1
      )
      setSubPage(1)
    }
    return (
      <button className={`pagination-btn arrow`} onClick={handleChangePage}>
        <ArrowIcon rotate={direction === 'left' ? 180 : 0} />
      </button>
    )
  }
)
