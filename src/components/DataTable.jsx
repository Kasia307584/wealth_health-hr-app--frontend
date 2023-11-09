import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { store } from "../store/store";
import mockData from "../MOCK_DATA";
// import { useSelector } from "react-redux";

export default function Table() {
  const data = store.getState().employeeTable;
  // const selectorTest = useSelector((state) => state.employeeTable);

  const columns = [
    {
      header: "First Name",
      accessorKey: "firstName",
    },
    {
      header: "Last Name",
      accessorKey: "lastName",
    },
    {
      header: "Start Date",
      accessorKey: "startDate",
    },
    {
      header: "Department",
      accessorKey: "department",
    },
    {
      header: "Date of Birth",
      accessorKey: "dateOfBirth",
    },
    {
      header: "Street",
      accessorKey: "street",
    },
    {
      header: "City",
      accessorKey: "city",
    },
    {
      header: "State",
      accessorKey: "state",
    },
    {
      header: "Zip Code",
      accessorKey: "zipCode",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
          {mockData.map((row) => (
            <tr key={row.id}>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.startDate}</td>
              <td>{row.department}</td>
              <td>{row.dateOfBirth}</td>
              <td>{row.street}</td>
              <td>{row.city}</td>
              <td>{row.state}</td>
              <td>{row.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
