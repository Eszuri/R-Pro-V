import { Route, Routes } from "react-router-dom";
import Price from "./price";
import Home from "./Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/price-list" element={<Price />} />
    </Routes>
  )
}
