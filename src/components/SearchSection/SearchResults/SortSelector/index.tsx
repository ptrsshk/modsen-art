import { FC } from 'react'
import { sortOptions } from 'src/constants/consts'

interface SortSelectorProps {
  sortVariant: string
  setSortVariant: React.Dispatch<React.SetStateAction<string>>
}

export const SortSelector: FC<SortSelectorProps> = ({
  sortVariant,
  setSortVariant,
}) => {
  const handleSortChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setSortVariant(value)
  }
  return (
    <div className="sort-selector-container">
      Sort:
      <select
        id="sort-selector"
        value={sortVariant}
        onChange={handleSortChange}
      >
        {sortOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
