import { render, screen } from '@testing-library/react';
import App from './App';
import Name from './Name'
import Time from './Time'

test('should render name component', () => {
  const name = "Zhou zhong ping"
  render(<Name name={name} />);
  const nameElement = screen.getByText(/Zhou zhong ping/);
  expect(nameElement).toBeInTheDocument();
  expect(nameElement).toHaveTextContent("Zhou zhong ping");
});

test('should render Time component', () => {
  const name = "CURRENT TIME"
  render(<Time />);
  const nameElement = screen.getByText(/CURRENT TIME/);
  expect(nameElement).toBeInTheDocument();
  expect(nameElement).toHaveTextContent("CURRENT TIME");
});

test('should render App component', () => {
  const name = "CURRENT TIME"
  render(<App />);
});
