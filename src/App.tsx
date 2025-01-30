import './reset.css'
import './style.scss'

import { BrowserRouter } from 'react-router'

import { AppRouter } from './components/AppRouter'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

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
