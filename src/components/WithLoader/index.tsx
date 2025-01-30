import { FC } from 'react'

interface WithLoaderProps {
  isLoading: boolean
  children: React.ReactNode
}

export const WithLoader: FC<WithLoaderProps> = ({ isLoading, children }) => {
  return isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : (
    <>{children}</>
  )
}
