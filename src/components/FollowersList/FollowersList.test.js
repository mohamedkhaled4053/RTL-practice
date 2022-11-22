import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from './FollowersList';

function MockFollowersList() {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
}

it('should render follower', async () => {
   render(<MockFollowersList />);
  let follower = await screen.findByTestId('follower-0');
  expect(follower).toBeInTheDocument()
});
