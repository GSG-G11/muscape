import PropTypes from 'prop-types';

function Selection({ getFilter }) {
  const handleFilter = (event) => {
    const { id } = event.target;
    return getFilter(id);
  };

  return (
    <ul>
      <li>
        <button className="nav_button" type="button" id="albums" onClick={handleFilter}>
          Albums
        </button>
      </li>
      <li>
        <button className="nav_button" type="button" id="artists" onClick={handleFilter}>
          Artists
        </button>
      </li>
      <li>
        <button className="nav_button" type="button" id="playlists" onClick={handleFilter}>
          Playlists
        </button>
      </li>
    </ul>
  );
}

export default Selection;

Selection.propTypes = {
  getFilter: PropTypes.func.isRequired
};
