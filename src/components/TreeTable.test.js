import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TreeTable from "./TreeTable";
import { TreeProvider } from "../../contexts/TreeContext";

const mockData = [
  {
    id: 1,
    name: "Sales",
    subDepartments: [{ id: 2, name: "Domestic Sales" }],
  },
  { id: 3, name: "HR" },
];

test("renders table with department headers", () => {
  render(
    <TreeProvider jsonData={mockData}>
      <TreeTable />
    </TreeProvider>
  );
  expect(screen.getByText(/Departmanlar/)).toBeInTheDocument();
});

test("shows loading message when loading is true", () => {
  render(
    <TreeProvider jsonData={mockData}>
      <TreeTable />
    </TreeProvider>
  );
  expect(screen.getByText(/Loading.../)).toBeInTheDocument();
});

test("filters data based on search input", () => {
  render(
    <TreeProvider jsonData={mockData}>
      <TreeTable />
    </TreeProvider>
  );

  const searchInput = screen.getByPlaceholderText("Search...");
  fireEvent.change(searchInput, { target: { value: "HR" } });

  expect(screen.getByText(/HR/)).toBeInTheDocument();
  expect(screen.queryByText(/Sales/)).not.toBeInTheDocument();
});