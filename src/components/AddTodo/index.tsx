import styles from './AddTodo.module.scss';
import { useState } from 'react';
import TodoItemModel from '@/models/TodoItemModel';
import { uuid } from 'uuidv4';
import Checkbox from '@/components/Checkbox';

interface Props {
  onAddTodo: (todo: TodoItemModel) => void;
}

function AddTodo({ onAddTodo }: Props): JSX.Element {
  const [todo, setTodo] = useState('');

  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        e.preventDefault();
        if (todo) {
          onAddTodo({ title: todo, status: 'toBeDone', id: uuid() });
          setTodo('');
        }
      }}
    >
      <input
        type="text"
        value={todo}
        className={styles.input}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="new todo name"
      />
      <button className={styles.button} type="submit">
        Add todo
      </button>
    </form>
  );
}

export default AddTodo;
