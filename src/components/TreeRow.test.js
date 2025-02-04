import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TreeRow from "./TreeRow";
import { TreeProvider } from "../../contexts/TreeContext";

const mockNode = {
  id: 1,
  name: "Finance",
  subDepartments: [{ id: 2, name: "Accounts" }],
};

test("renders node with correct name", () => {
  render(
    <TreeProvider jsonData={[]}>
      <table>
        <tbody>
          <TreeRow node={mockNode} />
        </tbody>
      </table>
    </TreeProvider>
  );
  
  expect(screen.getByText(/Finance/)).toBeInTheDocument();
});

test("expands and collapses sub-departments on toggle button click", () => {
  render(
    <TreeProvider jsonData={[]}>
      <table>
        <tbody>
          <TreeRow node={mockNode} />
        </tbody>
      </table>
    </TreeProvider>
  );

  const toggleButton = screen.getByRole("button", { name: `toggle-${mockNode.id}` });
  
  // Expand
  fireEvent.click(toggleButton);
  expect(screen.getByText(/Accounts/)).toBeInTheDocument();
  
  // Collapse
  fireEvent.click(toggleButton);
  expect(screen.queryByText(/Accounts/)).not.toBeInTheDocument();
});