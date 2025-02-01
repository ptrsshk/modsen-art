import { observer } from 'mobx-react-lite'
import { FC, useEffect } from 'react'
import { Gallery } from 'src/components/Gallery'
import { Other } from 'src/components/OtherSection'
import { SearchSection } from 'src/components/SearchSection'
import { useArtworksContext } from 'src/store/artworksStore'

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
