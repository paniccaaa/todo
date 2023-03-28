import useTodoStore from "../useTodoStore";
import "./todo.css";
const NewTask = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const removeTask = useTodoStore((state) => state.removeTask);
  return (
    <ul className="ul">
      {tasks.map((task, index) => (
        <li className="li" key={index}>
          {task}
          <button className="button" onClick={() => removeTask(task)}>
            Delete Task
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NewTask;
