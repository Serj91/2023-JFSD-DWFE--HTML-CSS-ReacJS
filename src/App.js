import React, {useState} from 'react';
import Toolbar from './components/Sidebar/Toolbar.jsx';
import "./App.css"
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Backdrop from './components/Sidebar/Backdrop.jsx';


import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import routes from './Routes.js';

const router = createBrowserRouter(routes);


const App = () => {

  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
      setSidebar((prevState) => !prevState)
  }

  return (
   <>
    <div>
      <Toolbar openSidebar={toggleSidebar}/>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
      <Sidebar sidebar={sidebar}/>
      <RouterProvider router={router}/>
    </div>
   </>
  );
  }
export default App;
