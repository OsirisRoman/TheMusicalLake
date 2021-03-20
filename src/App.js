import { useState } from 'react';

import cricketImage from './Cricket.png';
import dragonflyImage from './Dragonfly.png';
import frogImage from './Frog.png';
import songImage from './Song.png';

import './App.css';

import Character from './Components/Character';
import Song from './Components/Song';

function App() {
  const [result, setResult] = useState('');
  const [songNumber, setSongNumber] = useState('');

  const frog = {
    name: 'frog',
    image: frogImage,
    soundList: ['brr', 'birip', 'brrah', 'croac'],
  };
  const dragonfly = {
    name: 'dragonfly',
    image: dragonflyImage,
    soundList: ['fiu', 'plop', 'pep'],
  };
  const cricket = {
    name: 'cricket',
    image: cricketImage,
    soundList: ['cric-cric', 'trri-trri', 'bri-bri'],
  };

  let songs = [
    'brr, fiu, cric-cric, brrah',
    'pep, birip, trri-trri, croac',
    'bri-bri, plop, cric-cric, brrah',
  ];

  const restOfSong = givenSound => {
    let newResult;

    songs.some((song, index) => {
      const regex = new RegExp(`(${givenSound}),?`);
      if (regex.test(song)) {
        setSongNumber(index + 1);
        newResult = song.slice(
          song.indexOf(givenSound) + givenSound.length + 2
        );
      }
      return regex.test(song);
    });

    setResult(newResult);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>The Musical Lake</h1>
        <div className='flexContainer containerDirection'>
          <div className='characters'>
            <Character character={frog} restOfSong={restOfSong} />
            <Character character={dragonfly} restOfSong={restOfSong} />
            <Character character={cricket} restOfSong={restOfSong} />
          </div>
          <Song songs={songs} image={songImage} />
        </div>
        <p data-testid='dynamic-text'>
          {songNumber
            ? `Result found on song ${songNumber}`
            : 'Select a sound first'}
        </p>
        <p data-testid='text-result' className='text-result'>
          {result}
        </p>
        <a
          className='App-link'
          href='https://github.com/OsirisRoman/TheMusicalLake'
          target='_blank'
          rel='noopener noreferrer'>
          GitHub Source Code
        </a>
      </header>
    </div>
  );
}

export default App;
