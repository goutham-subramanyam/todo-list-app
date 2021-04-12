import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Collapse } from 'neetoui';
import classnames from 'classnames';

const Block = ({ title, items = [], children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="nt-sidebar__block">
      <div className={classnames("nt-sidebar-block__title", { "open": open })}>
        <div className="flex flex-row items-center justify-start" onClick={() => setOpen(!open)}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.80005 4.79999L11.2 7.99999L4.80005 11.2V4.79999Z" fill="#D1D5DB"/>
          </svg>
          <h6>{title}</h6>
        </div>
        <Button style="icon" icon="ri-add-line text-lg"/>
      </div>
      <Collapse open={open} className="flex flex-col items-start justify-start mb-5">
        {items.map((item) => {
          const { id, label, count } = item;
          return (
            <NavLink
              key={id}
              to={`/${title}/${id}`}
              className="nt-sidebar__item nt-sidebar__item--sub"
              activeClassName="active"
              >
              <span>{label}</span>
              <span className="nt-sidebar-item__count">{count}</span>
            </NavLink>
          )
        })}
        {children && 
          <>
            {children}
          </>
        }
      </Collapse>
    </div>
  )
}

export default Block
