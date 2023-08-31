import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "../pages/Login";
import DashBoardPages from "../pages/DashBoardPages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<DashBoardPages />} />
      </Route>
    </Routes>
  );
}

export default App;
