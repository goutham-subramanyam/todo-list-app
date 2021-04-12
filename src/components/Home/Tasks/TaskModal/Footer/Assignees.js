import React from 'react';
import { Dropdown, Avatar, Button } from 'neetoui';
import classnames from 'classnames';

const SAMPLE_MEMBERS = [
  {
    id: 1,
    name: "Goutham Subramanyam",
    profile_image_path: ""
  },
  {
    id: 2,
    name: "Edwin Babu",
    profile_image_path: ""
  },
  {
    id: 3,
    name: "Joseph Varghese",
    profile_image_path: ""
  },
  {
    id: 4,
    name: "Vinay V",
    profile_image_path: ""
  }
]

const Assignees = ({ task, setTask }) => {
  const { assignees } = task;

  const handleChange = (assignee) => {
    const removeIndex = assignees.findIndex(item => item.id === assignee.id);
    
    if(removeIndex > -1) {
      assignees.splice(removeIndex, 1);
      setTask({ ...task, assignees: assignees });
    }
    
    else {
      setTask({ ...task, assignees: [...assignees, assignee] })
    }
  }


  const Target = () => {
    if (assignees.length > 0) {
      return (
        <div className="flex -space-x-1 overflow-hidden">
          {assignees.map((assignee, index) => {
            return (
              <Avatar size={20} contact={assignee} key={index} className="ring-2 ring-white"/>
            )
          })}
          <Button
            style="icon"
            icon="ri-add-line text-base"
            className="justify-center w-5 h-5 bg-gray-100 rounded-full opacity-100 ring-2 ring-white hover:bg-gray-200 focus:bg-gray-200"
          />
        </div>
      )
    } else {
      return (
        <Button
          style="icon"
          icon="ri-user-add-line"
        />
      )
    }
  }

  return (
    <Dropdown
      className="flex"
      customTarget={Target}
      position="bottom-right"
    >
      {SAMPLE_MEMBERS.map((member, index) => {
        const isActive = assignees.find(assignee => assignee.id === member.id);
        return (
          <li
            key={index}
            className={classnames({ "active": isActive })}
            onClick={() => handleChange(member)}
          >
            {member.name}
          </li>
        )
      })}
    </Dropdown>
  )
}

export default Assignees
