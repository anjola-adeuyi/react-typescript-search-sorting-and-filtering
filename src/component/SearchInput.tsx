import React from 'react'

interface Props {
  setsearchQuery: (query: string) => void
}

const SearchInput = (props: Props) => {
  const { setsearchQuery } = props
  return (
    <>
      <label htmlFor='search' className='mt-3'>
        Search! Try me...
      </label>
      <input 
        id='search'
        type='search'
        className='form-control mb-3 full-width'
        placeholder='Search...'
        aria-label='Search'
        onChange={(e) => setsearchQuery(e.target.value)}
      />
    </>
  )
}

export default SearchInput