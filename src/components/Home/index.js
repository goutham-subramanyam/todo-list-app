import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Header } from '../Layouts';
import Sidebar from './Sidebar';
import AllTasks from './Filters/AllTasks';
import Pinned from './Filters/Pinned';
import Today from './Filters/Today';
import Upcoming from './Filters/Upcoming';
import Projects from './Filters/Projects';
import Labels from './Filters/Labels';

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <Header/>
      <div className="flex flex-row items-start justify-start">
        <Sidebar/>
        <Switch>
          <Route path="/labels/:labelID" component={Labels}/>
          <Route path="/projects/:projectID" component={Projects}/>
          <Route path="/upcoming" component={Upcoming}/>
          <Route path="/today" component={Today}/>
          <Route path="/pinned" component={Pinned}/>
          <Route path="/" component={AllTasks}/>
        </Switch>
      </div>
    </div>
  )
}

export default Home
