import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './CArd';

describe('Card', () => {
  const mockDeletePoke = jest.fn();

  beforeEach(() => {
    render(
      <Router>
        <Card
          id="1"
          name="Test Pokemon"
          tipos={["Fire", "Flying"]}
          image="test_image.jpg"
          deletePoke={mockDeletePoke}
        />
      </Router>
    );
  });

  test('renders the pokemon name', () => {
    expect(screen.getByText(/Test Pokemon/i)).toBeInTheDocument();
  });

  test('renders the pokemon types', () => {
    expect(screen.getByText(/Fire/i)).toBeInTheDocument();
    expect(screen.getByText(/Flying/i)).toBeInTheDocument();
  });


});