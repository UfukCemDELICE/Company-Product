import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "antd/dist/reset.css"
import {ConfigProvider} from 'antd'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <ConfigProvider theme={{
        token:{
         colorPrimary: '#1890ff',
        }
      }}>
        <App />
      </ConfigProvider>
    </React.StrictMode>,
  </BrowserRouter>
)
