import PropTypes from 'prop-types';

const Song = ({ songs, image }) => {
  return (
    <div className='flexContainer flexDirectionColumn justifySpaceAround'>
      {songs.map((song, index) => (
        <div
          key={Math.floor(Math.random() * 1000000)}
          className='flexContainer'>
          <img src={image} className='songImage' alt={`song ${index}`} />
          <p className='song'>
            #{index + 1}:&#8287;&#8287; {song}
          </p>
        </div>
      ))}
    </div>
  );
};

Song.propTypes = {
  songs: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
};

export default Song;
