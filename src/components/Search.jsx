import PropTypes from 'prop-types';

function Search({ getSearch }) {
  const handleSearch = (event) => {
    const { value } = event.target;
    return getSearch(value);
  };

  return (
    <div className="search_header">
      <input type="text" onChange={handleSearch} />
      <button type="button">Search</button>
    </div>
  );
}

export default Search;

Search.propTypes = {
  getSearch: PropTypes.func.isRequired
};
