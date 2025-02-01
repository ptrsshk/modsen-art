import axios from 'axios'

import { IArtworkCard, IFavorite } from '../types'

const $host = axios.create({
  baseURL: 'https://api.artic.edu/api/v1/artworks',
})

export const fetchArtworksWithPagination = async (page: number = 1) => {
  const response = (await $host.get('', { params: { page: page } })).data
  return response
}
export const fetchFavouriteArtwork = async (id: number) => {
  const response = (
    await $host.get(
      `/${id}?fields=id,title,artist_title,is_public_domain,image_id`
    )
  ).data
  return response
}
export const fetchFavouriteArtworks = async (favourites: IFavorite[]) => {
  const artworks = await Promise.all(
    favourites.map((favourite) =>
      fetchFavouriteArtwork(favourite.id).then((res) => res.data)
    )
  )
  return artworks
}
export const fetchArtwork = async (id: number) => {
  const response = (await $host.get(`/${id}`)).data
  return response
}
interface SearchResult {
  id: number
}
export const search = async (q: string): Promise<IArtworkCard[]> => {
  const response = (await $host.get(`/search?q=${q}&fields=id&size=15`)).data
  const artworksArr = await Promise.all(
    response.data.map((artwork: SearchResult) =>
      fetchFavouriteArtwork(artwork.id).then((res) => res.data)
    )
  )
  return artworksArr
}
