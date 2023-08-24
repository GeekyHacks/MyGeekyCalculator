import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../components/Contact';

test('renders Contact correctly', () => {
  const { container } = render(<Contact />);
  expect(container).toMatchSnapshot();
});
