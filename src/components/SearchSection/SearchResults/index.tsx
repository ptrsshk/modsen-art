import { FC, useState } from 'react'

import { ArtworkVariant } from '../../../constants/ArtworkVariant'
import { useSortedResults } from '../../../hooks/useSortSearchResults'
import { IArtworkCard } from '../../../types/types'
import { ArtworkCard } from '../../ArtworkCard'
import { SortSelector } from './SortSelector'

interface SearchResults {
  results: IArtworkCard[]
}

export const SearchResults: FC<SearchResults> = ({ results }) => {
  const [sortVariant, setSortVariant] = useState('default')

  const sortedResults = useSortedResults(results, sortVariant)

  return (
    <div className="search-results-container">
      <SortSelector sortVariant={sortVariant} setSortVariant={setSortVariant} />
      <div className="small-card-container">
        {sortedResults.map((artwork) => (
          <ArtworkCard
            key={artwork.id}
            {...artwork}
            variant={ArtworkVariant.small}
          />
        ))}
      </div>
    </div>
  )
}
