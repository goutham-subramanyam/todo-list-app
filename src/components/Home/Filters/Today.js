import React, { useState } from 'react';
import * as dayjs from 'dayjs';
import Tasks from '../Tasks';
import { loadTasks } from '../Tasks/helpers';
import { isNil } from 'ramda';

const Today = () => {
  const storedTasks = loadTasks();
  const [tasks, setTasks] = useState(storedTasks);
  
  const reloadTasks = () => {
    const storedTasks = loadTasks();
    setTasks(storedTasks);
  }

  const filteredTasks = tasks.filter(task => {
    if (!isNil(task.dueDate)) {
      const currentDate = dayjs(new Date());
      const taskDate = dayjs(task.dueDate?.date).toDate();
      const diff = currentDate.diff(taskDate, 'day') === 0;
      return diff;
    }
  })
  
  return (
    <Tasks
      title="Today"
      tasks={filteredTasks}
      reloadTasks={reloadTasks}
    />
  )
}

export default Today
