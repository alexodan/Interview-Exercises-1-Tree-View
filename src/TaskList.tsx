import { Task } from "./App";
import TaskCard from "./Task";
import "./TaskList.css";

type Props = {
  tasks: Task[];
};

export default function TaskList({ tasks }: Props) {
  console.log("TaskList");
  if (!tasks.length) return null;
  return (
    <ul>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </ul>
  );
}
