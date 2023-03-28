import useTodoStore from "../useTodoStore";
import NewTask from "./NewTask";
import "./todo.css";
const ToDo = () => {
  const addTask = useTodoStore((state) => state.addTask);
  const changeHandler = useTodoStore((state) => state.changeHandler);
  const task = useTodoStore((state) => state.task);
  const submitHandler = useTodoStore((state) => state.submitHandler);

  return (
    <div className="glav">
      <h1 className="h1">ToDo List</h1>
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add new"
          onChange={changeHandler}
          value={task}
          className="input"
        />
        <button className="buttonDel" type="submit" onClick={addTask}>
          New task
        </button>
      </form>
      <NewTask />
    </div>
  );
};

export default ToDo;
