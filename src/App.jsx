import { BrowserRouter, Navigate, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Routes index element={<Navigate replace to="dashboard" />} />
          <Routes path="dashboard" element={<Dashboard />} />
          <Routes path="bookings" element={<Bookings />} />
          <Routes path="cabins" element={<Cabins />} />
          <Routes path="users" element={<Users />} />
          <Routes path="settings" element={<Settings />} />
          <Routes path="account" element={<Account />} />
          <Routes path="login" element={<Login />} />
          <Routes path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
