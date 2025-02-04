import { useState, useEffect } from "react";

const useTreeData = (jsonData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(jsonData)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Loading error");
        setLoading(false);
      });
  }, [jsonData]);

  return { data, loading, error };
};

export default useTreeData;