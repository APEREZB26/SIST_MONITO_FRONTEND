import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../interfaces/auth";
/*import { Homepage } from "../views/Homepage";*/

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}