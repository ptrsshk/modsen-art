import { yupResolver } from '@hookform/resolvers/yup'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { search } from '../../api'
import { useDebounce } from '../../hooks/useDebounce'
import { IArtworkCard } from '../../types/types'
import { SearchIcon } from '../Icons/SearchIcon'
import { schema } from './schema'
interface SearchData {
  q: string
}
interface SearchForm {
  setResults: Dispatch<SetStateAction<IArtworkCard[]>>
  setLoading: Dispatch<SetStateAction<boolean>>
}

export const SearchForm: FC<SearchForm> = ({ setResults, setLoading }) => {
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
      try {
        const result = await search(data.q)
        console.log(result)
        setResults(result)
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    }
    if (debouncedInputValue && !errors.q) {
      submit({ q: debouncedInputValue })
    } else {
      setResults([])
    }
  }, [debouncedInputValue, errors.q, setLoading, setResults])

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
