import { SearchForm } from './SearchForm'
import './SearchSection.scss'

export const SearchSection = () => {
  return (
    <section className="search-section">
      <h1>
        let's find some <span className="highlight">Art</span> here!
      </h1>
      <SearchForm />
    </section>
  )
}
