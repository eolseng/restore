import React from 'react';
import { render } from '@testing-library/react';
import Home from "./home/home";
import Header from "./header/header";

import App from './index';

test('renders learn react link', () => {
  const { getByText } = render(<App/>);
  const linkElement = getByText(/Logg inn/i);
  expect(linkElement).toBeInTheDocument();
});
