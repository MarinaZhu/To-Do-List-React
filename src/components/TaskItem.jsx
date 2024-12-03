function TaskItem({ task, removeTodo }) {
  return (
    <li>
      <div>
        <input id="todo-id" type="checkbox" />
        <label htmlFor="todo-id">{task.text}</label>
      </div>
      <div>
        <button type="button">
          Edit <span className="visually-hidden">{task.text}</span>
       </button>
        <button type="button" onClick={() => removeTodo(task.id)}>
          Delete <span className="visually-hidden">{task.text}</span>
        </button>
      </div>
    </li>
  );
}

export default TaskItem;