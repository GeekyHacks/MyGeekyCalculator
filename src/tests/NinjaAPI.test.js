import React from 'react';
import { render } from '@testing-library/react';
import QuoteApi from '../components/NinjaAPI';

test('FetchedApi renders correctly', () => {
  const { container } = render(<QuoteApi />);
  expect(container).toMatchSnapshot();
});
