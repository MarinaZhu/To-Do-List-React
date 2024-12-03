import TaskItem from "./TaskItem";

function Tasks({todos, removeTodo}) {
    console.log(typeof(todos));
    return (
        <ul role="list" aria-labelledby="list-heading">
            {todos.map((todo) => (
                <TaskItem key={todo.id} task={todo} removeTodo={removeTodo} />
            ))}
        </ul>
    );
}

export default Tasks;