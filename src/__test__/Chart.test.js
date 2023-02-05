import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Chart from '../pages/Chart';

describe('Rockets', () => {
  test('renders Rockets Page without crashing', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Chart />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree.toJSON).toMatchSnapshot();
  });

  test('renders Rockets Page without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Chart />
        </BrowserRouter>
      </Provider>,
    );
    container.querySelector('.data-cont');
    expect(container.firstChild).toMatchSnapshot();

    container.querySelector('.secondary_color');
    expect(container.firstChild).toMatchSnapshot();
  });
});
