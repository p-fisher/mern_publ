import { render, screen } from '@testing-library/react';
import App from './App';

test('renders feed the danj', () => {
  render(<App />);
  const myText = screen.getByText('danj');
  expect(myText).toBeInTheDocument();
});
