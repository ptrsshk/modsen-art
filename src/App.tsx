import { BrowserRouter } from 'react-router'
import { AppRouter } from './components/AppRouter'
import { Header } from './components/Header/Header'
import './reset.css'
import './style.scss'
import { Footer } from './components/Footer/Footer'

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
