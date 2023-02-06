import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "antd/dist/reset.css"
import "./index.css"
import ConfigProvider from "antd/es/config-provider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#17181F",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
