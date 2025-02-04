import React, { createContext, useContext, useState, useMemo, useCallback } from "react";
import useTreeData from "../hooks/useTreeData";

const TreeContext = createContext();

export const TreeProvider = ({ jsonData, children }) => {
  const { data, loading, error } = useTreeData(jsonData);
  const [searchText, setSearchText] = useState("");
  const [expandedNodes, setExpandedNodes] = useState([]);

  
  const filterTree = useCallback((nodes, text, expanded = new Set()) => {
    if (!text) return nodes;

    return nodes
      .map((node) => {
        if (node.name?.toLowerCase().includes(text.toLowerCase())) {
          expanded.add(node.id);
          return node;
        }
        if (node.subDepartments) {
          const filteredChildren = filterTree(node.subDepartments, text, expanded);
          if (filteredChildren.length > 0) {
            expanded.add(node.id);
            return { ...node, children: filteredChildren };
          }
        }
        return null;
      })
      .filter(Boolean);
  }, []);

  const filteredData = useMemo(() => {
    const expanded = new Set();
    const result = filterTree(data || [], searchText, expanded);
    setExpandedNodes(Array.from(expanded));
    return result;
  }, [data, searchText, filterTree]);

  return (
    <TreeContext.Provider value={{ searchText, setSearchText, expandedNodes, setExpandedNodes, filteredData, loading, error }}>
      {children}
    </TreeContext.Provider>
  );
};

export const useTree = () => useContext(TreeContext);