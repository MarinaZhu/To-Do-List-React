function TaskItem({ task, removeTodo }) {
  return (
    <li>
      {task.text}
      <button onClick={() => removeTodo(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;