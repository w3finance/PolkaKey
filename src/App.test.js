import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React Electron Template/i);
  expect(linkElement).toBeInTheDocument();
});
