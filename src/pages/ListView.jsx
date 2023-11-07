import { Link } from "react-router-dom";
import Table from "../components/DataTable";

export default function List() {
  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <Table />
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
