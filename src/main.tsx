// import { StrictMode } from 'react'
import { createContext } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import ArtworksStore from './components/store/artworksStore.ts'

export const ArtworkContext = createContext<ArtworksStore | undefined>(
  undefined
)

createRoot(document.getElementById('root')!).render(
  <ArtworkContext.Provider value={new ArtworksStore()}>
    <App />
  </ArtworkContext.Provider>
)
