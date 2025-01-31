import './reset.css'
import './style.scss'

import { BrowserRouter } from 'react-router'

import { AppRouter } from './components/AppRouter'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
