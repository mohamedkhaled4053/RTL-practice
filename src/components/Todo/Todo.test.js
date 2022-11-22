import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from './Todo';

function MockTodo() {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
}

function addTodos(todos) {
  let inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  let addButton = screen.getByRole('button', { name: 'Add' });
  todos.forEach((todo) => {
    fireEvent.change(inputElement, { target: { value: todo } });
    fireEvent.click(addButton);
  });
}

it('should add new task', () => {
  let testTasks = ['study hard', 'play well', 'love the cats'];
  render(<MockTodo />);
  addTodos(testTasks);
  testTasks.forEach((task) => {
    let devElment = screen.getByText(task);
    expect(devElment).toBeInTheDocument();
  });
});


it('new task should not be completed', () => {
  let testTasks = ['study hard', 'play well', 'love the cats'];
  render(<MockTodo />);
  addTodos(testTasks);
  testTasks.forEach((task) => {
    let devElment = screen.getByText(task);
    expect(devElment).not.toHaveClass('todo-item-active');
  });
});
