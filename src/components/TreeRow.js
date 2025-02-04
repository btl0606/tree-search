import React from "react";
import PropTypes from "prop-types";
import { useTree } from "../contexts/TreeContext";

const escapeRegex = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightText = (text, searchText) => {
  if (!searchText) return text;

  const escapedSearchText = escapeRegex(searchText);
  const regex = new RegExp(`(${escapedSearchText})`, "gi");

  return text.split(regex).map((part, index) =>
    part.toLowerCase() === searchText.toLowerCase() ? (
      <span key={index} className="highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const TreeRow = ({ node, level = 0 }) => {
  const { expandedNodes, setExpandedNodes, searchText } = useTree();
  const isExpanded = expandedNodes.includes(node.id);

  const toggleExpand = () => {
    setExpandedNodes((prev) =>
      prev.includes(node.id) ? prev.filter((id) => id !== node.id) : [...prev, node.id]
    );
  };

  return (
    <>
      <tr>
        <td style={{ paddingLeft: `${level * 50}px` }}>
          {node.subDepartments?.length > 0 && (
            <button
              aria-label={`toggle-${node.id}`}
              onClick={toggleExpand}
              style={{ marginRight: "5px" }}
              className="toggle-button"
            >
             
             <i className={`fas ${isExpanded ? 'fa-chevron-down' : 'fa-chevron-right'}`} aria-hidden="true" />
            </button>
          )}
          {highlightText(node.name, searchText)}
        </td>
      </tr>
      {isExpanded &&
        node.subDepartments && 
        node.subDepartments.map((child) => (<TreeRow key={child.id} node={child} level={level + 1} />))}
    </>
  );
};

TreeRow.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.array,
  }).isRequired,
  level: PropTypes.number,
};

export default TreeRow;