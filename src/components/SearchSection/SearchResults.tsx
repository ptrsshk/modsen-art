import { FC } from 'react'
import { IArtworkCard } from '../../types/types'
import { ArtworkCard } from '../ArtworkCard/ArtworkCard'
import { ArtworkVariant } from '../../consts/ArtworkVariant'

interface SearchResults {
  results: IArtworkCard[]
}

export const SearchResults: FC<SearchResults> = ({ results }) => {
  return (
    <div className="search-results-container">
      <div className="small-card-container">
        {results.map((artwork) => (
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
