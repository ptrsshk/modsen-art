import { makeAutoObservable } from 'mobx'
import { useContext } from 'react'
import { fetchArtworksWithPagination } from 'src/api'
import { ArtworkContext } from 'src/main'
import { IArtworkCard } from 'src/types'

export default class ArtworksStore {
  private _artworks: IArtworkCard[]
  private _page: number
  private _isLoading: boolean
  private _error: string
  constructor() {
    this._artworks = []
    this._page = 1
    this._isLoading = true
    this._error = ''
    makeAutoObservable(this)
  }

  setArtworks(artworks: IArtworkCard[]) {
    this._artworks = artworks
  }
  get artworks() {
    return this._artworks
  }

  setPage(page: number) {
    this._page = page
    this.fetchArtworks(page)
  }
  get page() {
    return this._page
  }

  setIsLoading(isLoading: boolean) {
    this._isLoading = isLoading
  }
  get isLoading() {
    return this._isLoading
  }

  setError(error: string) {
    this._error = error
  }
  get error() {
    return this._error
  }

  fetchArtworks(page: number = 1) {
    this.setError('')
    this.setIsLoading(true)
    fetchArtworksWithPagination(page)
      .then((res) => {
        this.setArtworks(res.data)
      })
      .catch((err) => {
        console.log(err)
        this.setError('Error in fetching data')
      })
      .finally(() => {
        this.setIsLoading(false)
      })
  }
}

export const useArtworksContext = () => {
  const artworks = useContext(ArtworkContext)
  if (artworks === undefined) {
    throw new Error('useArtworksContext must be used with a ArtworksContext')
  }
  return artworks
}
