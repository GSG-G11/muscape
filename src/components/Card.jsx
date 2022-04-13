import PropTypes from 'prop-types';

function Card({ artist }) {
  const { name, images, external_urls: url } = artist;
  return (
    artist && (
      <div className="card">
        <a href={url.spotify}>
          <img
            src={
              images.length >= 2
                ? images[1].url
                : 'https://media.istockphoto.com/vectors/music-note-icon-vector-illustration-vector-id1175435360?k=20&m=1175435360&s=612x612&w=0&h=1yoTgUwobvdFlNxUQtB7_NnWOUD83XOMZHvxUzkOJJs='
            }
            alt=""
          />
          <p className="card_Name">{name}</p>
        </a>
      </div>
    )
  );
}

export default Card;

Card.propTypes = {
  artist: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  external_urls: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired
  // genres: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired
};
