import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Age text', () => {
  render(<App />);
  const hasAge = screen.getByText('Age:');
  expect(hasAge).toBeInTheDocument();
});
