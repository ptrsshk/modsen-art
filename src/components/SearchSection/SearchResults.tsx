import { FC, useState } from 'react'
import { IArtworkCard } from '../../types/types'
import { ArtworkCard } from '../ArtworkCard/ArtworkCard'
import { ArtworkVariant } from '../../consts/ArtworkVariant'

interface SearchResults {
  results: IArtworkCard[]
}

export const SearchResults: FC<SearchResults> = ({ results }) => {
  const [sortVariant, setSortVariant] = useState('default')

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortVariant(event.target.value)
  }

  const sortedResults = [...results].sort((a, b) => {
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

  return (
    <div className="search-results-container">
      <div className="sort-selector-container">
        Sort:
        <select
          id="sort-selector"
          value={sortVariant}
          onChange={handleSortChange}
        >
          <option value="default">Default</option>
          <option value="nameA">Name ASC</option>
          <option value="nameD">Name DSC</option>
          <option value="artistA">Artist ASC</option>
          <option value="artistD">Artist DSC</option>
        </select>
      </div>
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
