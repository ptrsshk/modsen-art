import { useMemo } from 'react'

import { IArtworkCard } from '../types/types'

export const useSortedResults = (
  results: IArtworkCard[],
  sortVariant: string
) => {
  return useMemo(() => {
    return [...results].sort((a, b) => {
      switch (sortVariant) {
        case 'default':
          return 0
        case 'nameA':
          return a.title.localeCompare(b.title)
        case 'nameD':
          return b.title.localeCompare(a.title)
        case 'artistA':
          return a.artist_title.localeCompare(b.artist_title)
        case 'artistD':
          return b.artist_title.localeCompare(a.artist_title)
        default:
          return 0
      }
    })
  }, [results, sortVariant])
}
