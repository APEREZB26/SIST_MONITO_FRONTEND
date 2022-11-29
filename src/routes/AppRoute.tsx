import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from '../interfaces/auth/Login';
import { HomeAgente } from '../interfaces/HomeAgente';

export function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/HomeAgente" element={<HomeAgente />} />
      </Routes>
    </BrowserRouter>
  );
}