import './SearchSection.scss'

import { FC, useState } from 'react'
import { IArtworkCard } from 'src/types/types'

import { WithLoader } from '../WithLoader'
import { SearchForm } from './SearchForm'
import { SearchResults } from './SearchResults'

export const SearchSection: FC = () => {
  const [results, setResults] = useState<IArtworkCard[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
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
        {results.length >= 1 ? <SearchResults results={results} /> : null}
      </WithLoader>
    </section>
  )
}
