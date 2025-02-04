import { FC, useState } from 'react'
import { ArtworkCard } from 'src/components/ArtworkCard'
import { ArtworkVariant } from 'src/constants/ArtworkVariant'
import { useSortedResults } from 'src/hooks/useSortSearchResults'
import { IArtworkCard } from 'src/types'

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
            artwork={artwork}
            variant={ArtworkVariant.small}
          />
        ))}
      </div>
    </div>
  )
}
