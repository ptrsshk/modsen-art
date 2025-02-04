import './SearchSection.scss'

import { FC, useState } from 'react'
import { IArtworkCard } from 'src/types'

import { WithLoader } from '../WithLoader'
import { SearchForm } from './SearchForm'
import { SearchResults } from './SearchResults'

export const SearchSection: FC = () => {
  const [results, setResults] = useState<IArtworkCard[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const showResults = (results: IArtworkCard[] | null, loading: boolean) => {
    if (results === null) return null
    if (results.length) return <SearchResults results={results} />
    if (!loading) return <div>Nothing found.</div>
  }
  return (
    <section className="search-section">
      <h1>
        let's find some <span className="highlight">Art</span> here!
      </h1>
      <SearchForm
        setResults={setResults}
        setLoading={setLoading}
        setError={setError}
      />
      <WithLoader isLoading={loading} error={error}>
        {showResults(results, loading)}
      </WithLoader>
    </section>
  )
}
