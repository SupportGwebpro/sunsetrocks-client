import { BrowserRouter, Routes, Route } from "react-router";
import GuestRegister from "./pages/GuestRegister";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>App</div>} />
      <Route path="/register" element={<GuestRegister />}></Route>
    </Routes>
  </BrowserRouter>
  )
}
