import { create } from "zustand";

const useTodoStore = create((set) => ({
  task: "",
  tasks: [],
  changeHandler: (event) => {
    let valueInput = event.target.value;
    set((state) => ({ task: `${(state.task = valueInput)}` }));
  },
  addTask: () => set((state) => ({ tasks: [...state.tasks, state.task] })),
  removeTask: (text) => {
    set((state) => ({ tasks: state.tasks.filter((task) => task !== text) }));
    console.log(`deleted element: "${text}"`);
  },
  submitHandler: (event) => {
    event.preventDefault();
    set((state) => ({ task: `${(state.task = "")}` }));
  },
}));

export default useTodoStore;
