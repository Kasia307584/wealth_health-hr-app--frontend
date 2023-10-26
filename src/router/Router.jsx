import { Routes, Route } from "react-router-dom";
import EmployeeView from "../pages/employee/EmployeeView";
import ListView from "../pages/list/ListView";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeView />} />
      <Route path="employee-list" element={<ListView />} />
    </Routes>
  );
}
