import PropTypes from 'prop-types';

const Character = ({ character, restOfSong }) => {
  return (
    <div className='flexContainer flexDirectionRow justifySpaceBetween'>
      <img
        src={character.image}
        className={character.name}
        alt={character.name}
      />
      <ul className='flexContainer soundList'>
        {character.soundList.map(sound => (
          <li key={Math.floor(Math.random() * 1000000)}>
            <button data-testid='btn-sound' onClick={() => restOfSong(sound)}>
              {sound}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.object.isRequired,
  restOfSong: PropTypes.func.isRequired,
};

export default Character;
