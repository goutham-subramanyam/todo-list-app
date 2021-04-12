import React, { useState, useEffect } from 'react'
import { Modal, Dropdown, Checkbox, Button } from 'neetoui';
import { TaskInput } from '../../../Common';
import classNames from 'classnames';
import Footer from './Footer';
import { loadTasks, updateTasks } from '../helpers';
import { SAMPLE_PROJECTS } from '../constants';

const TaskModal = ({
  isOpen,
  onClose,
  selectedTask,
}) => {

  const [task, setTask] = useState({});

  useEffect(() => {
    setTask(selectedTask);
  }, [selectedTask])
  
  const handleSubmit = () => {
    const tasks = loadTasks();
    const taskIndex = tasks.findIndex(item => item.id === task.id);
    
    if(taskIndex > -1) {
      tasks[taskIndex] = task;
      updateTasks([...tasks]);
    }
    else {
      const newTask = {...task, id: tasks.length + 1}
      updateTasks([...tasks, newTask]);
    }
    
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="nui-modal__wrapper--task"
      autoHeight
    >
      {task && 
        <>
          {!task.id &&
            <h1 className="mb-6 text-lg font-medium text-gray-800">Add Task</h1>
          }
          <div className="flex flex-row items-center justify-start mb-5">
            <Dropdown
              buttonStyle="secondary"
              buttonProps={{
                label: SAMPLE_PROJECTS.find(project => task.project === project.id)?.label,
                className: "bg-gray-100 border-0"
              }}
              position="bottom-left"
            >
              {SAMPLE_PROJECTS.map((project) => (
                <li
                  key={project.id}
                  onClick={() => setTask({ ...task, project: project.id})}
                  className={classNames({ "active": project.id === task.project })}
                >
                  {project.label}
                </li>
              ))}
            </Dropdown>
          </div>
          <div className="flex flex-row items-start justify-start">
            <Checkbox
              name="add-task-checkbox"
              className="mr-4"
              checked={task.completed}
              onChange={(e) => setTask({
                ...task,
                completed: e.target.checked
              })}
            />
            <div className="flex flex-row items-center justify-start flex-grow cursor-pointer">
              <TaskInput
                rows={3}
                value={task.label}
                onChange={(e) => setTask({
                  ...task,
                  label: e.target.value
                })}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
          <Footer
            task={task}
            setTask={setTask}
            onClose={onClose}
          />
          <div className="flex flex-row items-center justify-end pt-4 space-x-3 border-t border-gray-200">
            <Button
              size="large"
              style="secondary"
              label="Cancel"
              onClick={() => onClose()}
            />
            <Button
              size="large"
              label={task.id ? "Update Task": "Add Task"}
              onClick={() => handleSubmit()}
            />
          </div>
        </>
      }
    </Modal>
  )
}

export default TaskModal
