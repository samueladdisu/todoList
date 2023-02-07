import Home from "./pages/Home";
import Todos from "./pages/Todos";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
        <Route path="/todos/:todoId" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;