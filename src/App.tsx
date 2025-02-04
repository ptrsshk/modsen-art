import './reset.css'
import './style.scss'

import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router'

import { AppRouter } from './components/AppRouter'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary
        fallback={<main>Something went wrong... Try reloading page.</main>}
      >
        <AppRouter />
      </ErrorBoundary>
      <Footer />
    </BrowserRouter>
  )
}

export default App
