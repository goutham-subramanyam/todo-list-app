import React from 'react';
import { Button, Dropdown } from 'neetoui';

const SORT_OPTIONS = ['created date', 'due date', 'name', 'assignee'];

const Header = ({
  title,
  showCompleted,
  setShowCompleted
}) => {
  return (
    <div className="flex flex-row items-center justify-between py-4 mb-3 border-b border-gray-200">
      <h1 className="text-xl font-medium text-gray-800">{title}</h1>
      <div className="flex flex-row items-center justify-end space-x-4">
        <Button style="icon" icon="ri-user-add-line"/>
        <Dropdown
          className="flex"
          buttonStyle="icon"
          buttonProps={{ icon: "ri-arrow-up-down-line" }}
          autoWidth
        >
          {SORT_OPTIONS.map((option, index) => {
            return (
              <li key={index}>Sort by {option}</li>
            )
          })}
        </Dropdown>
        <Dropdown
          className="flex"
          buttonStyle="icon"
          buttonProps={{ icon: "ri-more-2-fill" }}
        >
          <li>Add Section</li>
          <li>Switch to Board View</li>
          <li onClick={() => setShowCompleted(!showCompleted)}>{showCompleted ? 'Hide' : 'Show'} Completed Tasks</li>
          <div className="w-full h-px my-1 bg-gray-100"></div>
          <li>Edit Project</li>
          <li>Clone Project</li>
          <li className="text-red-500 hover:text-red-600">Delete Project</li>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header
