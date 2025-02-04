import { renderHook, act } from "@testing-library/react-hooks";
import { render, screen } from "@testing-library/react";
import { TreeProvider, useTree } from "./TreeContext";
import TreeTable from "../components/TreeTable";
const mockData = [{ id: 1, name: "IT" }];

test("provides default tree context values", () => {
  const { result } = renderHook(() => useTree(), {
    wrapper: ({ children }) => <TreeProvider jsonData={mockData}>{children}</TreeProvider>,
  });

  expect(result.current.searchText).toBe("");
  expect(result.current.expandedNodes).toEqual([]);
});


test("renders tree table without crashing", () => {
  render(
    <TreeProvider jsonData={[]}>
      <TreeTable />
    </TreeProvider>
  );
  expect(screen.getByText(/Departmanlar/)).toBeInTheDocument();
});

test("updates search text correctly", () => {
  const { result } = renderHook(() => useTree(), {
    wrapper: ({ children }) => <TreeProvider jsonData={mockData}>{children}</TreeProvider>,
  });

  act(() => {
    result.current.setSearchText("Test");
  });

  expect(result.current.searchText).toBe("Test");
});