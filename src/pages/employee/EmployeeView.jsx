import { Link } from "react-router-dom";

export default function Employee() {
  return (
    <>
      <h1>Create Employee</h1>
      <Link to="employee-list">Employee List Link</Link>
    </>
  );
}
