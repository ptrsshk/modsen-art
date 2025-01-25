import { BrowserRouter } from 'react-router'
import { AppRouter } from './components/AppRouter'
import { Header } from './components/Header/Header'
import './reset.css'
import './style.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
