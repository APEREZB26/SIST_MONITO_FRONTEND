import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from '../interfaces/auth/Login';

export function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}