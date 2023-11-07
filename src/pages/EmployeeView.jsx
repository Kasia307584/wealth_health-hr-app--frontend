import { Link } from "react-router-dom";
import Form from "../components/CreateEmployeeForm";

export default function Employee() {
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </>
  );
}
