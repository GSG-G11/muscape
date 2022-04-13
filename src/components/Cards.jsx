import PropTypes from 'prop-types';
import Card from './Card';

function Cards({ artists }) {
  return (
    <div className="artists">
      {artists.map((artist) => <Card artist={artist} />)}
    </div>
  );
}

export default Cards;

Cards.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired
};
