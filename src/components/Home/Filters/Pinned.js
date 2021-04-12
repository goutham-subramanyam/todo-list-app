import React, { useState } from 'react';
import Tasks from '../Tasks';
import { loadTasks } from '../Tasks/helpers';

const Pinned = () => {
  const storedTasks = loadTasks();
  const [tasks, setTasks] = useState(storedTasks);
  
  const reloadTasks = () => {
    const storedTasks = loadTasks();
    setTasks(storedTasks);
  }

  const filteredTasks = tasks.filter(task => task.pinned)
  
  return (
    <Tasks
      title="Pinned"
      tasks={filteredTasks}
      reloadTasks={reloadTasks}
    />
  )
}

export default Pinned
