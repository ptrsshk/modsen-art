import { yupResolver } from '@hookform/resolvers/yup'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { search } from '../../../api'
import { useDebounce } from '../../../hooks/useDebounce'
import { IArtworkCard } from '../../../types/types'
import { SearchIcon } from '../../Icons/SearchIcon'
import { schema } from '../schema'
interface SearchData {
  q: string
}
interface SearchForm {
  setResults: Dispatch<SetStateAction<IArtworkCard[]>>
  setLoading: Dispatch<SetStateAction<boolean>>
  setError: Dispatch<SetStateAction<string>>
}

export const SearchForm: FC<SearchForm> = ({
  setResults,
  setLoading,
  setError,
}) => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<SearchData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })
  const inputValue = watch('q')
  const debouncedInputValue = useDebounce(inputValue, 750)

  useEffect(() => {
    const submit: SubmitHandler<SearchData> = async (data) => {
      setLoading(true)
      setError('')
      try {
        const result = await search(data.q)
        setResults(result)
      } catch (error) {
        console.log(error)
        setError('Something went wrong while fetching data')
      } finally {
        setLoading(false)
      }
    }
    if (debouncedInputValue && !errors.q) {
      submit({ q: debouncedInputValue })
    } else {
      setResults([])
    }
  }, [debouncedInputValue, errors.q, setError, setLoading, setResults])

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <div className="search-bar">
        <input
          {...register('q', { required: true })}
          placeholder="Search art, artist, work..."
        />
        <SearchIcon />
      </div>
      <p className="errors">{errors.q?.message}</p>
    </form>
  )
}
