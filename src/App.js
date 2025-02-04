import React, {useEffect, useState} from "react";

import { TreeProvider } from "./contexts/TreeContext";
import TreeTable from "./components/TreeTable";
import "./styles/Tree.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const buttonStyle = {
    marginBottom: "10px",
    padding: "5px 10px",
    cursor: "pointer",
    backgroundColor: theme === "dark" ? "#f0f0f0" : "#333", 
    color: theme === "dark" ? "#000" : "#fff", // Yazı rengi
    border: theme === "dark" ? "1px solid #ccc" : "1px solid #555", 
    borderRadius: "5px",
  };
  return (
    <TreeProvider jsonData="./data.json">
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={buttonStyle}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
      <TreeTable />
    </TreeProvider>
  );
};

export default App;
