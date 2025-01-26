import axios from 'axios'

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
export const fetchArtwork = async (id: number) => {
  const response = (await $host.get(`/${id}`)).data
  return response
}
