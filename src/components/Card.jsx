import PropTypes from 'prop-types';

function Card({ artist }) {
  const
    {
      name, images, external_urls: url, genres
    } = artist;
  return (
    <a href={url.spotify}>
      <div className="card">
        <img
          src={
            images[1].url
              ? images[1].url
              : 'https://i.scdn.co/image/ab676161000051745464c6450a88d073a3f117b0'
          }
          alt=""
        />
        <p>{name}</p>
        {genres.slice(0, 2).map((genre) => (
          <small className="genre">{genre}</small>
        ))}
      </div>
    </a>
  );
}

export default Card;

Card.propTypes = {
  artist: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  external_urls: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
  genres: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired
};
