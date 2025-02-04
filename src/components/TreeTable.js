import React from "react";
import TreeRow from "./TreeRow";
import "../styles/Tree.css";
import { useTree } from "../contexts/TreeContext";

const TreeTable = () => {
  const { searchText, setSearchText, filteredData, loading, error } = useTree();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
    <div className="search-container">
    <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        aria-label="search-input"
        className="search-input"
       
      /></div>
      <table className="tree-table">
        <thead>
          <tr>
            <th>Departments</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((node) => (
            <TreeRow key={node.id} node={node} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TreeTable;