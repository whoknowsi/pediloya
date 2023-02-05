'use client'

import { useRef, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

interface Props {
  handleSearch: (search: string) => void
}

const SearchBar = ({ handleSearch }: Props) => {
  const [search, setSearch] = useState('')
  const searchBar = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.length === 0 ? '' : `${e.target.value[0].toUpperCase()}${e.target.value.slice(1)}`)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch(search)
    searchBar.current?.blur()
  }

  return (
    <form 
      className="px-4 py-2 rounded-full border-gray-300 border text-md flex items-center gap-2 text-gray-900 w-full bg-white"
      onSubmit={handleSubmit}
    >
      <IoSearchOutline />
      <input
        ref={searchBar}
        className="bg-transparent outline-none font-normal text-sm w-full placeholder-gray-500"
        type="search"
        placeholder="¿Qué estás buscando?"
        onChange={handleChange}
        value={search}
      />
    </form>
  )
}

export default SearchBar