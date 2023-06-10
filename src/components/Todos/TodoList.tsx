import React from 'react';
import Todo from './Todo.tsx'
import styles from './TodoList.module.css';

interface TodoItem {
  id: string;
  text: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
