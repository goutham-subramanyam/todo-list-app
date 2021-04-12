import React, { useState } from 'react';
import { Button, Checkbox } from 'neetoui';
import { DragIcon, TaskInput } from '../../Common';
import { ADD_TASK_STATES } from './constants';
import { loadTasks, updateTasks } from './helpers';

const TASK_DEFAULT = {
  id: null,
  label: '',
  project: 1,
  completed: false,
  pinned: false,
  assignees: [],
  dueDate: null,
  comments: null,
  labels: [],
}

const AddTask = ({ reloadTasks, setSelectedTask }) => {
  const [state, setState] = useState(ADD_TASK_STATES.CLOSED);
  const [task, setTask] = useState(TASK_DEFAULT);

  const handleSubmit = () => {
    const tasks = loadTasks();
    const updatedTasks = [...tasks, {...task, id: tasks.length + 1}];
    updateTasks(updatedTasks);
    reloadTasks();
    setTask(TASK_DEFAULT);
    setState(ADD_TASK_STATES.CLOSED)
  }

  return (
    <div className="flex flex-row items-center justify-start">
      {state === ADD_TASK_STATES.CLOSED &&
        <div className="mt-4 fadeIn">
          <Button
            style="link"
            label="Add Task"
            icon="ri-add-line"
            className="fadeIn"
            onClick={() => setState(ADD_TASK_STATES.OPEN)}
          />
        </div>
      }
      {state === ADD_TASK_STATES.OPEN &&
        <div className="flex flex-col items-start justify-start w-full fadeIn">
          <div className="relative flex flex-row items-start justify-start w-full py-4 border-t border-transparent group">
            <div className="absolute top-4 left-0 mt-0.5 -ml-6 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <DragIcon/>
            </div>
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
                value={task.label}
                onChange={(e) => setTask({
                  ...task,
                  label: e.target.value
                })}
                handleSubmit={handleSubmit}
                autoFocus
              />
              <Button
                style="icon"
                icon="ri-more-2-fill"
                onClick={() => {
                  setSelectedTask(task);
                  setTask(TASK_DEFAULT);
                  setState(ADD_TASK_STATES.CLOSED);
                }}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start mt-2 space-x-3">
            <Button
              label="Add Task"
              onClick={() => handleSubmit()}
            />
            <Button
              style="secondary"
              label="Cancel"
              onClick={() => {
                setTask(TASK_DEFAULT);
                setState(ADD_TASK_STATES.CLOSED);
              }}
            />
          </div>
        </div>
      }
    </div>
  )
}

export default AddTask
