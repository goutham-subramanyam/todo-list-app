import React, { useState } from 'react';
import { Container, Scrollable } from '../../Layouts';
import { EmptyState } from '../../Common';
import Header from './Header';
import Task from './Task';
import TaskModal from './TaskModal';
import AddTask from './AddTask';


const Tasks = ({ tasks, title, reloadTasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <Scrollable className="p-6">
      <Container>
        <Header
          title={title}
          showCompleted={showCompleted}
          setShowCompleted={setShowCompleted}
        />

        <div className="w-full">
          {tasks.filter(task => !task.completed).map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                reloadTasks={reloadTasks}
                setSelectedTask={setSelectedTask}
              />
            )
          })}
        </div>

        <AddTask
          reloadTasks={reloadTasks}
          setSelectedTask={setSelectedTask}
        />

        {showCompleted &&
          <div className="mt-4 fadeIn">
            {tasks.filter(task => task.completed).map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  reloadTasks={reloadTasks}
                />
              )
            })}
          </div>
        }

        <EmptyState
          tasks={tasks}
        />
        
        <TaskModal
          isOpen={selectedTask}
          onClose={() => {
            setSelectedTask(null);
            reloadTasks();
          }}
          selectedTask={selectedTask}
        />
        
      </Container>
    </Scrollable>
  )
}

export default Tasks
