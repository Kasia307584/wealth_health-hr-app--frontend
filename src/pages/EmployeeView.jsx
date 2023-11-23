import { Link } from "react-router-dom";
import Form from "../components/CreateEmployeeForm";
import Button from "react-bootstrap/Button";

export default function Employee() {
  return (
    <>
      <div className="title">
        <h1 className="heading">HRnet</h1>
      </div>
      <div className="container">
        <Link to="employee-list" className="btn-link">
          <Button variant="outline-secondary">View Current Employees</Button>
        </Link>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </>
  );
}
