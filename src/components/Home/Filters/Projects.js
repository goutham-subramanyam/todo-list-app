import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Tasks from '../Tasks';
import { loadTasks } from '../Tasks/helpers';
import { SAMPLE_PROJECTS } from '../Tasks/constants';

const Project = () => {
  const { projectID } = useParams();
  const storedTasks = loadTasks();
  const [tasks, setTasks] = useState(storedTasks);
  
  const reloadTasks = () => {
    const storedTasks = loadTasks();
    setTasks(storedTasks);
  }

  const filteredTasks = tasks.filter(task => task.project === parseInt(projectID))

  return (
    <Tasks
      title={SAMPLE_PROJECTS.find(project => project.id === parseInt(projectID))?.label}
      tasks={filteredTasks}
      reloadTasks={reloadTasks}
    />
  )
}

export default Project
