import AddTodo from '@/components/AddTodo';
import TodoList from '@/components/TodoList';
import useLocalStorage from '@/hooks/useLocalSotrage';
import TodoItemModel from '@/models/TodoItemModel';
import { useEffect, useState } from 'react';
import styles from './TodoListScreen.module.scss';
import Checkbox from '@/components/Checkbox';

function TodoListScreen(): JSX.Element {
  const { data: todos, setData: setTodos } = useLocalStorage<TodoItemModel[]>('todos');
  const [allDone, setAllDone] = useState(Boolean(todos?.every((todo) => todo.status === 'done')));

  useEffect(() => {
    setAllDone(Boolean(todos?.every((todo) => todo.status === 'done')));
  }, [todos?.length]);

  const handleAddNewTodo = (newTodo: TodoItemModel) => {
    setTodos(todos ? [...todos, newTodo] : [newTodo]);
  };

  const handleDeleteById = (deletedId: string) => {
    if (todos) {
      todos?.filter((el) => el.id !== deletedId);
      setTodos(todos?.filter((el) => el.id !== deletedId));
    }
  };
  const handleChangeStatusById = (newTodo: TodoItemModel) => {
    if (todos) {
      const updatedTodos = todos?.reduce((initial: TodoItemModel[], current) => {
        return [...initial, current.id === newTodo.id ? newTodo : current];
      }, []);
      setTodos(updatedTodos);
      setAllDone(Boolean(updatedTodos?.every((todo) => todo.status === 'done')));
    }
  };

  const handleChangeAllStatuses = () => {
    const updatedTodos: TodoItemModel[] =
      todos?.map((todo) => ({
        ...todo,
        status: allDone ? 'toBeDone' : 'done',
      })) || [];
    setAllDone(!allDone);
    setTodos(updatedTodos);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.add_todo}>
        <Checkbox checked={allDone} onChange={handleChangeAllStatuses} />
        <AddTodo onAddTodo={handleAddNewTodo} />
      </div>
      <TodoList
        todos={todos || []}
        onDeleteTodo={handleDeleteById}
        onChangeStatus={handleChangeStatusById}
      />
    </div>
  );
}

export default TodoListScreen;
