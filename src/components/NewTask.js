import useTodoStore from "../useTodoStore";
import "./todo.css";
const NewTask = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const removeTask = useTodoStore((state) => state.removeTask);
  return (
    <div>
      {tasks.length > 0 ? (
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
      ) : (
        <div>
          <h4>No task found</h4>
        </div>
      )}
    </div>
  );
};

export default NewTask;
