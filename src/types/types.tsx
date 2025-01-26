export interface IArtworkCard {
  id: number
  title: string
  artist_title: string
  is_public_domain: boolean
  image_id: string
}
export interface IArtworkDetailed {
  id: number
  title: string | null
  artist_title: string | null
  is_public_domain: boolean | null
  image_id: string | null
  date_display: string | null
  artist_display: string | null
  dimensions: string | null
  credit_line: string | null
  department_title: string | null
  copyright_notice: string | null
}
export interface IFavorite {
  id: number
}
