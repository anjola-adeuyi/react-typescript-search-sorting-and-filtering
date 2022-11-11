import React from 'react'

interface Props {
  setsearchQuery: (query: string) => void;
}

const SearchInput = (props: Props) => {
  const { setsearchQuery } = props
  return (
    <div className="row justify-content-center mt-3">
      <label htmlFor='search' className='form-label'>
        Search! Try me...
      </label>
      <div className="col-6">
        <input 
          id='search'
          type='search'
          className='form-control form-control-lg mb-3 col col-lg-6'
          placeholder='Search...'
          aria-label='Search'
          onChange={(e) => {
            console.log('firing!')
            setsearchQuery(e.target.value)}
          }
        />
      </div>
    </div>
  )
}

export default SearchInput