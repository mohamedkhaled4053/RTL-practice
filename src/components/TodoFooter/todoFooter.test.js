import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from './TodoFooter';

// this mock because the link component in TodoFooter
function MockTodoFooter({numberOfIncompleteTasks}) {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
}

it('should render the number provided', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  let el = screen.getByText('5 tasks left');
  let el2 = screen.getByText('1 task left');
  expect(el).toBeInTheDocument();
  expect(el2).toBeInTheDocument();
});
