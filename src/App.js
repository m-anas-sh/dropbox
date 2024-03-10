import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="bg-[#3B4755]">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
