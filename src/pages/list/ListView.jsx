import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";

export default function List() {
  const products = [{ id: 1, name: "Milk", price: 10 }];
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Product Name",
    },
    {
      dataField: "price",
      text: "Product Price",
    },
  ];

  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <Link to="/">Home</Link>
      </div>
      <BootstrapTable keyField="id" data={products} columns={columns} />
    </>
  );
}
