import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from '../interfaces/auth/Login';
import { HomeAgente } from '../interfaces/HomeAgente';
import { HomeAuditor } from '../interfaces/HomeAuditor';
import { EvaluationAgente } from '../interfaces/EvaluationAgente';
import { EvaluationAuditor } from '../interfaces/EvaluationAuditor';

EvaluationAgente
export function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/HomeAgente" element={<HomeAgente />} />
        <Route path="/HomeAuditor" element={<HomeAuditor />} />
        <Route path="/EvaluationAgente" element={<EvaluationAgente />} />
        <Route path="/EvaluationAuditor" element={<EvaluationAuditor />} />
      </Routes>
    </BrowserRouter>
  );
}