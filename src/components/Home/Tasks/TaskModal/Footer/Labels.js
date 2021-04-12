import React from 'react';
import { Dropdown } from 'neetoui';
import classnames from 'classnames';
import { SAMPLE_LABELS } from '../../constants';

const Labels = ({ task, setTask }) => {
  const { labels } = task;
  
  const handleChange = (label) => {
    const removeIndex = labels.findIndex(item => item.id === label.id);
    
    if(removeIndex > -1) {
      labels.splice(removeIndex, 1);
      setTask({ ...task, labels: labels });
    }
    
    else {
      setTask({ ...task, labels: [...labels, label] })
    }
  }

  return (
    <Dropdown
      className="flex"
      icon={labels.length > 0 ? "ri-price-tag-3-fill" : "ri-price-tag-3-line"}
      buttonStyle="icon"
      position="bottom-right"
    >
      {SAMPLE_LABELS.map((label, index) => {
        const isActive = labels.find(item => item.id === label.id) !== undefined;
        return (
          <li
            key={index}
            className={classnames({ "active": isActive })}
            onClick={() => handleChange(label)}
          >
            {label.name}
          </li>
        )
      })}
    </Dropdown>
  )
}

export default Labels
