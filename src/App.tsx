import { BrowserRouter, Routes, Route } from "react-router";
import GuestRegister from "./pages/GuestRegister";
import Thankyou from "./pages/Thankyou";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>App</div>} />
      <Route path="/register" element={<GuestRegister />}></Route>
      <Route path="/thank-you" element={<Thankyou />}></Route>
    </Routes>
  </BrowserRouter>
  )
}
