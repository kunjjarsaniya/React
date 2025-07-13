import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./index.css";

import App from './App.jsx'
import DataType from './Datatype.jsx'
import RenderingJson from './RenderingJson.jsx'
import UseStateHook from './UseStateHook.jsx'
import TwoWayBinding from './TwoWayBinding.jsx'

import Todo from './Todo.jsx'
import Context from "./Context/Context.jsx";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <DataType /> */}
    {/* <RenderingJson /> */}
    {/* <UseStateHook /> */}
    {/* <TwoWayBinding /> */}

    <Context>
      <Todo />
      <ToastContainer position='top-center' />
    </Context>

  </StrictMode>,
)
