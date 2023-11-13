import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initialState from '../../redux/Reducer';
import rootReducer from '../../redux/Reducer'
import Search from './Search';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'

test('renders loading text before pokemon data is fetched', () => {
  const testInitialState = {
    ...initialState,
    SearchPokemon: null,
  };
  const store = createStore(rootReducer, testInitialState);
  render(
    <Provider store={store}>
      <Router>
        <Search />
      </Router>
    </Provider>
  );
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});