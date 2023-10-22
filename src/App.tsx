import { useState } from "react";
import "./App.css";
import { TASKS } from "./data/tasks";
import TaskList from "./TaskList";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  tasks?: Task[];
};

function App() {
  const [tasks] = useState<Task[]>(TASKS);

  return (
    <>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
