import { FC } from 'react'
import { SearchForm } from './SearchForm'
import './SearchSection.scss'

export const SearchSection: FC = () => {
  return (
    <section className="search-section">
      <h1>
        let's find some <span className="highlight">Art</span> here!
      </h1>
      <SearchForm />
    </section>
  )
}
