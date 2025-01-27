import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface SearchForm {
  q: string
}

export const SearchForm: FC = () => {
  const { register, handleSubmit } = useForm<SearchForm>()

  const submit: SubmitHandler<SearchForm> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="search-bar">
        <input
          {...register('q', { required: true })}
          placeholder="Search art, artist, work..."
        />
        <button>&#128269;</button>
      </div>
    </form>
  )
}
