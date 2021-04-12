import React, { useState } from 'react'
import { Button, Dropdown, Collapse } from 'neetoui';
import { deleteTask, cloneTask, formatDate } from '../../helpers';
import Assignees from './Assignees';
import Labels from './Labels';
import DueDatePicker from './DueDatePicker';

const Footer = (props) => {
  const [showDueDatePicker, setShowDueDatePicker] = useState(false);
  const { task, setTask, onClose } = props;
  const displayDueDate = task.dueDate?.date;
  return (
    <div className="flex flex-col items-stretch justify-start">
      <div className="flex flex-row items-center justify-between w-full py-4">
        <Button
          style="secondary"
          label={displayDueDate ? formatDate(displayDueDate) : "Schedule"}
          icon="ri-calendar-line"
          onClick={() => setShowDueDatePicker(!showDueDatePicker)}
        />
        <div className="flex flex-row items-center justify-end space-x-4">
          <Assignees
            task={task}
            setTask={setTask}
          />
          <Labels
            task={task}
            setTask={setTask}
          />
          <Button
            style="icon"
            onClick={() => setTask({ ...task, pinned: !task.pinned })}
            icon={task.pinned ? "ri-pushpin-fill" : "ri-pushpin-line"}
          />
          {task.id &&
            <Dropdown
              className="flex"
              icon="ri-more-2-fill"
              buttonStyle="icon"
              autoWidth
            >
              <li
                onClick={() => {
                  cloneTask(task.id);
                  onClose();
                }}
                >
                  Clone Task
              </li>
              <li
                className="text-red-500 hover:text-red-600"
                onClick={() => {
                  deleteTask(task.id);
                  onClose();
                }}
              >
                Delete Task
              </li>
            </Dropdown>
          }
        </div>
      </div>
      <Collapse open={showDueDatePicker}>
        <DueDatePicker
          task={task}
          setTask={setTask}
        />
      </Collapse>
    </div>
  )
}

export default Footer
