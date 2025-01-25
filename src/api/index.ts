import axios from 'axios'

const $host = axios.create({
  baseURL: 'https://api.artic.edu/api/v1/artworks',
})

export const fetchArtworksWithPagination = async (page: number = 1) => {
  const response = (await $host.get('', { params: { page: page } })).data
  return response
}
