import { FC, useState } from 'react'
import { SearchForm } from './SearchForm'
import './SearchSection.scss'
import { IArtworkCard } from '../../types/types'
import { SearchResults } from './SearchResults'

export const SearchSection: FC = () => {
  const [results, setResults] = useState<IArtworkCard[]>([])
  const [loading, setLoading] = useState(false)
  return (
    <section className="search-section">
      <h1>
        let's find some <span className="highlight">Art</span> here!
      </h1>
      <SearchForm setResults={setResults} setLoading={setLoading} />
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : results.length >= 1 ? (
        <SearchResults results={results} />
      ) : null}
    </section>
  )
}
