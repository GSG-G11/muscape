import PropTypes from 'prop-types';
import Card from './Card';

function Cards({ data, filterOption }) {
  let filteredData;
  if (data.length !== 0) {
    if (filterOption === 'artists') {
      filteredData = data.artists.items;
    } else if (filterOption === 'albums') {
      filteredData = data.albums.items;
    } else {
      filteredData = data.playlists.items;
    }
    return (
      <div className="artists">
        {Object.keys(data).length !== 0
          ? filteredData.map((artist) => <Card key={artist.id} artist={artist} />)
          : null}
      </div>
    );
  }
}
export default Cards;

Cards.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
  filterOption: PropTypes.string.isRequired
};
