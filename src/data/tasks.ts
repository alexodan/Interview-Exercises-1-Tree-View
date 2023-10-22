import { Task } from "../App";

export const TASKS = [
  {
    id: "5hv47f787-9b9b-4c3a-8d3c-5eae0f2c8a6e",
    title: "Learn React",
    completed: false,
    tasks: [
      {
        id: "19f47f787-9b9b-4c3a-8d3c-2eae0f2c8a6e",
        title: "Learn JavaScript",
        completed: false,
      },
      {
        id: "9as47f787-9b9b-4c3a-8d3c-1eae0f2c8a6e",
        title: "Learn React Query",
        completed: false,
        tasks: [
          {
            id: "2bs77f787-9b9b-4c3a-8d3c-4eae0f2c8a6e",
            title: "Read docs",
            completed: false,
          },
          {
            id: "5as47f781-9b9b-4c3a-8d3c-5eae0f2c8a61",
            title: "Do the tutorial",
            completed: false,
          },
        ]
      },
      {
        id: "9as47f787-9b9b-4c3a-8d3c-61eae0f2c8a6e",
        title: "Learn React Router",
        completed: false,
      },
    ],
  },
  {
    id: "4f47f787-9b9b-4c3a-8d3c-5eae0f2c8a6e",
    title: "Do the laundry",
    completed: false,
  },
] as Task[];
