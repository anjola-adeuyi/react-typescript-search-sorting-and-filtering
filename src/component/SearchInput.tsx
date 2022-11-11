import React from 'react'
import useDebounce from '../hooks/useDebounce';

interface ISearchInputProps {
  setsearchQuery: (query: string) => void;
}

const SearchInput = (props: ISearchInputProps) => {
  const { setsearchQuery } = props;
  const [query, setQuery] = React.useState('');
  const debouncedQuery = useDebounce(query, 250);

  React.useEffect(() => {
    setsearchQuery(debouncedQuery);
  }, [debouncedQuery, setsearchQuery]);

  return (
    <div className="row justify-content-center mt-3">
      <label htmlFor='search' className='form-label'>
        Search! Try me...
      </label>
      <div className="col-6">
        <input 
          id='search'
          type='search'
          className='form-control form-control-lg mb-3'
          placeholder='Search...'
          aria-label='Search'
          onChange={(e) => {
            console.log('firing!')
            setQuery(e.target.value)}
          }
        />
      </div>
    </div>
  )
}

export default SearchInput