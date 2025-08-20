import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store";
import GuestRegister from "./pages/GuestRegister";
import Thankyou from "./pages/Thankyou";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>App</div>} />
          <Route path="/register" element={<GuestRegister />} />
          <Route path="/thank-you" element={<Thankyou />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
