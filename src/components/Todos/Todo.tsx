import React from 'react';
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

interface TodoProps {
  todo: {
    id: string;
    text: string;
    isCompleted: boolean;
  };
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
};

export default Todo;
