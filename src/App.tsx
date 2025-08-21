import { BrowserRouter, Routes, Route } from "react-router";
import GuestRegister from "./pages/GuestRegister";
import Thankyou from "./pages/Thankyou";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import RegisteredUsers from "./pages/RegisteredUsers";
import Config from "./pages/Config";
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>App</div>} />
          <Route path="/register" element={<GuestRegister />} />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="events" element={<Events />} />
            <Route path="registered-users" element={<RegisteredUsers />} />
            <Route path="config" element={<Config />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
