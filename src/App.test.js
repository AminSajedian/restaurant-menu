import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders logo image', () => {
  render(<App />);
  const logoImage = screen.getByAltText('logo');
  expect(logoImage).toBeInTheDocument();
});

test('renders code editing message', () => {
  render(<App />);
  const codeElement = screen.getByText(/edit/i);
  expect(codeElement).toBeInTheDocument();
});

test('renders App component', () => {
  render(<App />);
  const appComponent = screen.getByTestId('app-component');
  expect(appComponent).toHaveClass('App');
});