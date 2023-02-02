import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

import { Layout } from "./components/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes";

import "./awsmBS.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/chat" element={<ProtectedRoutes />}>
            <Route exact path="/chat" element={<Chat />} />
          </Route>
          <Route exact path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
/*
<Route exact path="/chat" element={<Chat />} />

 */
