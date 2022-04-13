import PropTypes from 'prop-types';
import { useState } from 'react';

function Search({ getSearch }) {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSearch = () => getSearch(search);

  return (
    <div className="search_header">
      <input type="text" onChange={handleChange} value={search} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;

Search.propTypes = {
  getSearch: PropTypes.func.isRequired
};
