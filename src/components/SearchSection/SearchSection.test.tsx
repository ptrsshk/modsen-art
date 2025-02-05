import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { search } from 'src/api'
import { IArtworkCard } from 'src/types'
import { describe, expect, it, Mock, vi } from 'vitest'

import { SearchSection } from '.'

vi.mock('src/api', () => ({
  search: vi.fn(),
}))

vi.mock('src/components/WithLoader', () => ({
  WithLoader: ({
    isLoading,
    error,
    children,
  }: {
    isLoading: boolean
    error: string
    children: React.ReactNode
  }) => {
    if (isLoading) return <div data-testid="loader"></div>
    if (error) return <div data-testid="error">{error}</div>
    return <>{children}</>
  },
}))

vi.mock('src/components/SearchSection/SearchResults', () => ({
  SearchResults: ({ results }: { results: IArtworkCard[] }) => {
    if (results.length === 0) {
      throw new Error('No results found')
    }
    return (
      <div data-testid="search-results">
        {results.map((artwork: IArtworkCard) => (
          <div key={artwork.id} data-testid="artwork-card">
            {artwork.title}
          </div>
        ))}
      </div>
    )
  },
}))

vi.mock('src/components/SearchSection/SearchForm', () => ({
  SearchForm: ({
    setResults,
    setLoading,
    setError,
  }: {
    setResults: React.Dispatch<React.SetStateAction<IArtworkCard[] | null>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    setError: React.Dispatch<React.SetStateAction<string>>
  }) => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setLoading(true)
      setError('')
      try {
        const results = await search('test')
        setResults(results)
      } catch {
        setError('Something went wrong while fetching data')
      } finally {
        setLoading(false)
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <input placeholder="Search art, artist, work..." />
        <button type="submit">Search</button>
      </form>
    )
  },
}))

describe('SearchSection', () => {
  it('renders search section with form', () => {
    render(<SearchSection />)

    expect(
      screen.getByPlaceholderText(/search art, artist, work.../i)
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders loader while fetching data', async () => {
    render(<SearchSection />)

    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('renders error message when there is an error', async () => {
    ;(search as Mock).mockRejectedValue(
      new Error('Something went wrong while fetching data')
    )

    render(<SearchSection />)

    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeInTheDocument()
      expect(
        screen.getByText(/something went wrong while fetching data/i)
      ).toBeInTheDocument()
    })
  })

  it('renders search results when data is fetched successfully', async () => {
    const mockResults: IArtworkCard[] = [
      {
        id: 1,
        title: 'Artwork 1',
        artist_title: 'Artist 1',
        is_public_domain: true,
        image_id: 'image1',
      },
      {
        id: 2,
        title: 'Artwork 2',
        artist_title: 'Artist 2',
        is_public_domain: true,
        image_id: 'image2',
      },
    ]

    ;(search as Mock).mockResolvedValue(mockResults)

    render(<SearchSection />)

    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    await waitFor(() => {
      expect(screen.getByTestId('search-results')).toBeInTheDocument()
      expect(screen.getAllByTestId('artwork-card')).toHaveLength(2)
    })
  })

  it('renders error boundary message when there are no search results', async () => {
    const mockResults: IArtworkCard[] = []
    ;(search as Mock).mockResolvedValue(mockResults)

    render(<SearchSection />)

    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeInTheDocument()
      expect(screen.getByText(/no results found/i)).toBeInTheDocument()
    })
  })
})
