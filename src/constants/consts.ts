export const HOME_ROUTE = '/'
export const ARTWORK_ROUTE = '/artwork/:id'
export const FAVOURITES_ROUTE = '/favourites'
export const ALL_ROUTE = '*'
export const IMAGE_URL = (image_id: string, resolution: 400 | 100) =>
  `https://www.artic.edu/iiif/2/${image_id}/full/${resolution},/0/default.jpg`
export const IS_PUBLIC_DOMAIN = (is_public_domain: boolean) => {
  return is_public_domain ? 'Public' : 'Private'
}
export const sortOptions = [
  { value: 'default', label: 'Default' },
  { value: 'nameA', label: 'Name ASC' },
  { value: 'nameD', label: 'Name DSC' },
  { value: 'artistA', label: 'Artist ASC' },
  { value: 'artistD', label: 'Artist DSC' },
]
