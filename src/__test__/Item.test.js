import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from '../components/Item';

describe('Item component', () => {
  it('should render without crashing', () => {
    const props = {
      icon: 'test_icon',
      name: 'test_name',
      symbol: 'test_symbol',
      price: 123,
    };

    // eslint-disable-next-line
    render(<Item {...props} />);
  });

  it('should render the correct props', () => {
    const props = {
      icon: 'test_icon',
      name: 'test_name',
      symbol: 'test_symbol',
      price: 123,
    };

    // eslint-disable-next-line
    render(<Item {...props} />);

    expect(screen.getByTestId('name').textContent).toEqual(props.name);

    expect(screen.getByTestId('symbol').textContent).toEqual(props.symbol);

    expect(screen.getByTestId('price').textContent).toEqual(`US$${props.price}`);
  });
});
