import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Tasks from '../Tasks';
import { loadTasks } from '../Tasks/helpers';
import { SAMPLE_LABELS } from '../Tasks/constants';

const Labels = () => {
  const { labelID } = useParams();
  const storedTasks = loadTasks();
  const [tasks, setTasks] = useState(storedTasks);
  
  const reloadTasks = () => {
    const storedTasks = loadTasks();
    setTasks(storedTasks);
  }

  const filteredTasks = tasks.filter(task => {
    return task.labels.find(label => label.id == parseInt(labelID));
  })

  return (
    <Tasks
      title={SAMPLE_LABELS.find(label => label.id === parseInt(labelID))?.name}
      tasks={filteredTasks}
      reloadTasks={reloadTasks}
    />
  )
}

export default Labels
