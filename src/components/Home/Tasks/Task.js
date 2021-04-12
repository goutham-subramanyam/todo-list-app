import React from 'react';
import classnames from 'classnames';
import { Checkbox, Dropdown, Avatar, Badge } from 'neetoui';
import { DragIcon } from '../../Common';
import { isEmpty, isNil } from "ramda";
import { deleteTask, cloneTask, formatDate, loadTasks, updateTasks } from './helpers';

const Task = ({
  task,
  reloadTasks,
  setSelectedTask
}) => {


  const { id, label, completed, assignees, dueDate, comments, labels } = task;
  const baseClasses = "relative flex flex-row items-start justify-start border-t border-gray-100 group first:border-t-0"
  
  const handleChange = (e) => {
    const tasks = loadTasks();
    const updatedTask = {...task, completed: e.target.checked };
    const taskIndex = tasks.findIndex(item => item.id === task.id);
    tasks[taskIndex] = updatedTask;
    updateTasks(tasks);
    reloadTasks();
  }

  return (
    <div className={classnames(baseClasses, {
      "py-4": !completed,
      "py-3": completed
    })}>
      <div className={classnames("absolute left-0 mt-0.5 -ml-6 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100", {
        "top-4": !completed,
        "top-3": !completed
      })}>
        <DragIcon/>
      </div>
      <Checkbox
        id={id}
        name={id}
        className="mr-4"
        checked={completed}
        onChange={(e)=> handleChange(e)}
      />
      <div className="flex flex-col items-start justify-start flex-grow">
        <div onClick={() => setSelectedTask(task)} className="flex flex-row items-center justify-between w-full cursor-pointer">
          <h4 className={classnames("text-sm leading-relaxed text-gray-800 whitespace-pre-wrap", { "line-through opacity-50": completed })}>{label}</h4>
          <div onClick={(e) => e.stopPropagation()} className="flex flex-row items-center justify-center">
            <Dropdown
              className="flex"
              buttonStyle="icon"
              buttonProps={{ 
                icon: "ri-more-2-fill",
                className: "opacity-0 group-hover:opacity-100 focus:opacity-100",
              }}
              autoWidth
            >
              <li
                onClick={() => {
                  cloneTask(id);
                  reloadTasks();
                }}
              >
                Clone Task
              </li>
              <li>Move to Project</li>
              <li
                className="text-red-500 hover:text-red-600"
                onClick={() => {
                  deleteTask(id);
                  reloadTasks();
                }}
              >
                Delete Task
              </li>
            </Dropdown>
          </div>
        </div>
        {(!isEmpty(assignees) || !isNil(dueDate) || !isNil(comments) || !isEmpty(labels)) && !completed &&
          <div className="flex flex-row items-center justify-start mt-3 space-x-5 text-xs leading-none text-gray-500">
            {!isEmpty(assignees) &&
              <div className="flex -space-x-1 overflow-hidden">
                {assignees.map((assignee, index) => {
                  return (
                    <Avatar size={20} contact={assignee} key={index} className="ring-2 ring-white"/>
                  )
                })}
              </div>
            }
            {!isNil(dueDate) &&
              <div className="flex flex-row items-center justify-start space-x-2">
                <i className="ri-calendar-line"/>
                <p>{formatDate(dueDate.date)}</p>
              </div>
            }
            {!isNil(comments) &&
              <div className="flex flex-row items-center justify-start space-x-2">
                <i className="ri-discuss-line"/>
                <p>{comments}</p>
              </div>
            }
            {!isEmpty(labels) &&
              <div className="flex flex-row items-center justify-start space-x-2">
                {labels.map((label) => (
                  <Badge
                    key={label.id}
                    type="squared"
                    className="text-gray-500 transition-all duration-300 ease-in-out border border-gray-200 cursor-pointer hover:text-gray-600 hover:border-gray-300"
                  >
                    {label.name}
                  </Badge>
                ))}
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Task
