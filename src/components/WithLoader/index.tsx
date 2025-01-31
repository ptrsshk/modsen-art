import { FC } from 'react'

interface WithLoaderProps {
  isLoading: boolean
  error: string
  children: React.ReactNode
}

export const WithLoader: FC<WithLoaderProps> = ({
  isLoading,
  children,
  error,
}) => {
  return error ? (
    <div>{error}</div>
  ) : isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : (
    <>{children}</>
  )
}
