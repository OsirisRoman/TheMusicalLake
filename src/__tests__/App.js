import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

afterEach(cleanup);

const result = new Map([
  ['brr', 'fiu, cric-cric, brrah'],
  ['birip', 'trri-trri, croac'],
  ['brrah', ''],
  ['croac', ''],
  // ['fiu', 'cric-cric, brrah'],
  ['plop', 'cric-cric, brrah'],
  // ['pep', 'birip, trri-trri, croac'],
  // ['cric-cric', 'brrah'],
  // ['trri-trri', 'croac'],
  // ['bri-bri', 'plop, cric-cric, brrah'],
]);

test('<App /> The app runs the first time it is launched', () => {
  render(<App />);

  expect(screen.getByText(/Select a sound first/i)).toBeInTheDocument();
});

//Checking conditional rendering
test('<App /> The dynamic text changes if a button is pressed', () => {
  render(<App />);

  const btnSound = screen.getAllByTestId('btn-sound');

  btnSound.forEach(btn => {
    userEvent.click(btn);

    expect(screen.getByTestId('dynamic-text')).not.toBe('Select a sound first');
  });
});

test('<App /> The dynamic text changes if a button is pressed', () => {
  render(<App />);

  const btnSound = screen.getAllByTestId('btn-sound');

  btnSound.forEach(btn => {
    userEvent.click(btn);

    expect(screen.getByTestId('dynamic-text')).not.toBe('Select a sound first');
  });
});

test('<App /> When given brr it should reproduce fiu, cric-cric, brrah according to the first song', () => {
  render(<App />);

  const btnSound = screen.getAllByTestId('btn-sound');

  userEvent.click(btnSound[0]);

  expect(screen.getByTestId('text-result').textContent).toBe(
    result.get(btnSound[0].textContent)
  );
});

test('<App /> When given birip it should reproduce trri-trri, croac according to the second song', () => {
  render(<App />);

  const btnSound = screen.getAllByTestId('btn-sound');

  userEvent.click(btnSound[1]);

  expect(screen.getByTestId('text-result').textContent).toBe(
    result.get(btnSound[1].textContent)
  );
});

test('<App /> When given plop it should reproduce cric-cric, brrah according to the third song', () => {
  render(<App />);

  const btnSound = screen.getAllByTestId('btn-sound');

  userEvent.click(btnSound[5]);

  expect(screen.getByTestId('text-result').textContent).toBe(
    result.get(btnSound[5].textContent)
  );
});

test('<App /> When given croac it should not reproduce anything according to all songs', () => {
  render(<App />);

  const btnSound = screen.getAllByTestId('btn-sound');

  userEvent.click(btnSound[2]);

  expect(screen.getByTestId('text-result').textContent).toBe(
    result.get(btnSound[2].textContent)
  );
});

test('<App /> When given brrah it should not reproduce anything according to all songs', () => {
  render(<App />);

  const btnSound = screen.getAllByTestId('btn-sound');

  userEvent.click(btnSound[3]);

  expect(screen.getByTestId('text-result').textContent).toBe(
    result.get(btnSound[3].textContent)
  );
});
