import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Character from '../Components/Character';

import frogImage from '../Frog.png';

const frog = {
  name: 'frog',
  image: frogImage,
  soundList: ['brr', 'birip', 'brrah', 'croac'],
};
const restOfSong = jest.fn();
afterEach(cleanup);

test('renders learn react link', () => {
  render(<Character character={frog} restOfSong={restOfSong} />);

  const btnSound = screen.getAllByTestId('btn-sound');

  //check restOfSong is fired when
  //any of the sounds are clicked
  btnSound.forEach(btn => {
    userEvent.click(btn);
    expect(restOfSong).toHaveBeenCalled();
  });
});
