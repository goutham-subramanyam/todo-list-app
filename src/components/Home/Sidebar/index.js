import React from 'react';
import { MAIN_LINKS, SIDEBAR_BLOCKS } from './constants';
import { NavLink } from 'react-router-dom'; 
import classnames from 'classnames';
import Block from './Block';

const SAMPLE_PROJECTS = [
  {
    id: 1,
    label: 'General',
    count: 8,
  },
  {
    id: 2,
    label: 'BB LLC',
    count: 12,
  },
  {
    id: 3,
    label: 'Constellation',
    count: 4,
  }
]


const SAMPLE_LABELS = [
  {
    id: 1,
    label: 'Urgent',
    count: 9,
  },
  {
    id: 2,
    label: 'Procastinated',
    count: 5,
  },
  {
    id: 3,
    label: 'Backlog',
    count: 0
  }
]

const SAMPLE_MEMBERS = [
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixqx=5DjPIwWBjo&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixqx=5DjPIwWBjo&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5DjPIwWBjo&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
]

const Sidebar = () => {
  return (
    <div className="nt-sidebar">
      <div className="w-full mb-5">
        {MAIN_LINKS.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <NavLink exact key={index} to={url} className="nt-sidebar__item" activeClassName="active">
              <div className="flex flex-row items-center justify-start">
                <i className={classnames("mr-2", icon)}/>
                {label}
              </div>
            </NavLink>
          )
        })}
      </div>

      <Block
        title={SIDEBAR_BLOCKS.PROJECTS}
        items={SAMPLE_PROJECTS}
      />

      <Block
        title={SIDEBAR_BLOCKS.LABELS}
        items={SAMPLE_LABELS}
      />

      <Block title={SIDEBAR_BLOCKS.MEMBERS}>
        <div className="mt-2 ml-6">
          <div className="flex mb-4 -space-x-1 overflow-hidden">
            {SAMPLE_MEMBERS.map((url, index) => (
              <img key={index} className="inline-block w-8 h-8 rounded-full ring-2 ring-white" src={url}/>
            ))}
            <div className="inline-flex flex-row items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer ring-2 ring-white group">
              <i className="text-gray-400 transition-all duration-300 ease-in-out ri-add-line group-hover:text-gray-500"/>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-gray-600">Invite your colleagues and collaborate on tasks together</p>
        </div>
      </Block>
    </div>
  )
}


export default Sidebar;
