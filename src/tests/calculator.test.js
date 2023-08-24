import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('renders Calculator correctly', () => {
  test('renders Calculator', () => {
    const { container } = render(<Calculator />);

    expect(container).toMatchSnapshot();
  });
});
