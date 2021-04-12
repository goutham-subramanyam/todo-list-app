import React, { useState } from 'react';
import Tasks from '../Tasks';
import { loadTasks } from '../Tasks/helpers';

const AllTasks = () => {
  const storedTasks = loadTasks();
  const [tasks, setTasks] = useState(storedTasks);

  const reloadTasks = () => {
    const storedTasks = loadTasks();
    setTasks(storedTasks);
  }

  return (
    <Tasks
      tasks={tasks}
      title="All Tasks"
      reloadTasks={reloadTasks}
    />
  )
}

export default AllTasks
