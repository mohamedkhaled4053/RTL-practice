import AddInput from './AddInput';
import { screen, render, fireEvent } from '@testing-library/react';

it('should have input field', () => {
  render(<AddInput />);
  let inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  expect(inputElement).toBeInTheDocument();
});

it('should be able to type', () => {
  let testTask = 'study hard';
  render(<AddInput todos={[]} setTodos={() => {}} />);
  let inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  fireEvent.change(inputElement, { target: { value: testTask } });
  expect(inputElement.value).toBe(testTask);
});
it('should be empty after adding', () => {
  let testTask = 'study hard';
  render(<AddInput todos={[]} setTodos={() => {}} />);
  let inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  let addButton = screen.getByRole('button', {name:'Add'})
  fireEvent.change(inputElement, { target: { value: testTask } });
  fireEvent.click(addButton)
  expect(inputElement.value).toBe('');
});
