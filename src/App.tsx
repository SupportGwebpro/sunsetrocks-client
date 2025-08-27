import { BrowserRouter, Routes, Route } from "react-router";
import GuestRegister from "./pages/GuestRegister";
import Thankyou from "./pages/Thankyou";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/register" element={<GuestRegister />} />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
