import TaskItem from "./TaskItem";

function Tasks({todos, removeTodo}) {
    console.log(typeof(todos));
    return (
        <ul>
            {todos.map((todo) => (
                <TaskItem key={todo.id} task={todo} removeTodo={removeTodo} />
            ))}
        </ul>
    );
}

export default Tasks;