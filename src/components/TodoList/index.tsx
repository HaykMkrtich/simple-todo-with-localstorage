import styles from './TodoList.module.scss';
import TodoItemModel from '@/models/TodoItemModel';
import Checkbox from '@/components/Checkbox';
import cn from 'classnames';
interface Props {
  todos: TodoItemModel[];
  onDeleteTodo: (id: string) => void;
  onChangeStatus: (changedTodo: TodoItemModel) => void;
}

function TodoList({ todos, onDeleteTodo, onChangeStatus }: Props): JSX.Element {
  return (
    <div className={styles.wrapper}>
      {todos?.map((todo) => (
        //@ts-ignore
        <div key={`todo_item_${todo.id}`} className={styles.todo_item}>
          <Checkbox
            onChange={() => {
              onChangeStatus({
                ...todo,
                status: todo.status === 'done' ? 'toBeDone' : 'done',
              });
            }}
            checked={todo?.status === 'done'}
          />
          <div className={styles.content}>
            <h3 className={styles.title}>{todo.title}</h3>
            <p className={cn(styles.status, { [styles.status_done]: todo.status === 'done' })}>
              {todo.status}
            </p>
          </div>

          <button className={styles.delete_button} onClick={() => onDeleteTodo(todo.id)} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
