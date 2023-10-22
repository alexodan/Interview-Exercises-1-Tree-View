import { useState } from "react";
import { Task } from "./App";
import TaskList from "./TaskList";
import "./Task.css";

type Props = {
  task: Task;
};

function ToggleViewButton({
  tasks,
  handleClick,
  isOpen,
}: {
  tasks: Task[] | undefined;
  handleClick: () => void;
  isOpen: boolean;
}) {
  return (
    tasks?.length && (
      <button onClick={handleClick}>
        {isOpen && (tasks?.length ?? 0) > 0 ? "🔺" : "🔻"}
      </button>
    )
  );
}

export default function TaskCard({ task }: Props) {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <li>
      <span>
        {task.title}{" "}
        <ToggleViewButton
          tasks={task.tasks}
          handleClick={() => setShowChildren(!showChildren)}
          isOpen={showChildren}
        />
      </span>
      {showChildren && task.tasks && <TaskList tasks={task.tasks} />}
    </li>
  );
}
