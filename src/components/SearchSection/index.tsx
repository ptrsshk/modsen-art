import './SearchSection.scss'

import { FC, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { IArtworkCard } from 'src/types'

import { WithLoader } from '../WithLoader'
import { SearchForm } from './SearchForm'
import { SearchResults } from './SearchResults'

export const SearchSection: FC = () => {
  const [results, setResults] = useState<IArtworkCard[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const showResults = (results: IArtworkCard[] | null) => {
    if (results === null) return null
    return <SearchResults results={results} />
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
        <ErrorBoundary
          fallbackRender={({ error }) => (
            <div data-testid="error">{error.message}</div>
          )}
          resetKeys={[results]}
        >
          {showResults(results)}
        </ErrorBoundary>
      </WithLoader>
    </section>
  )
}
