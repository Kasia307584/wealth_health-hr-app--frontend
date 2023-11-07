import { Routes, Route } from "react-router-dom";
import EmployeeView from "../pages/EmployeeView";
import ListView from "../pages/ListView";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeView />} />
      <Route path="employee-list" element={<ListView />} />
    </Routes>
  );
}
