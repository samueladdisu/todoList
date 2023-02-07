import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "antd/dist/reset.css"
import "./index.css"
import ConfigProvider from "antd/es/config-provider"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#17181F",
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
)
