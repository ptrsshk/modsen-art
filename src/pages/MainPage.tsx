import { observer } from 'mobx-react-lite'
import { FC, useEffect } from 'react'

import { Gallery } from '../components/Gallery'
import { Other } from '../components/OtherSection'
import { SearchSection } from '../components/SearchSection'
import { useArtworksContext } from '../store/artworksStore'

export const MainPage: FC = observer(() => {
  const artworksStore = useArtworksContext()

  useEffect(() => {
    artworksStore.fetchArtworks(artworksStore.page)
  }, [artworksStore])

  return (
    <>
      <SearchSection />
      <Gallery />
      <Other />
    </>
  )
})
