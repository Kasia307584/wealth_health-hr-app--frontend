import { Link } from "react-router-dom";
import Form from "../components/CreateEmployeeForm";
import Button from "react-bootstrap/Button";

export default function Employee() {
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Button variant="outline-secondary" size="sm">
          <Link to="employee-list" className="btn-link">
            View Current Employees
          </Link>
        </Button>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </>
  );
}
