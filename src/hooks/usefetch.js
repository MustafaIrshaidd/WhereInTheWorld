import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const jsonData = await response.json();
        setData(jsonData);

        // setTimeout(() => {
        // }, 3000);
      } catch (error) {
        setError(error);

        // setTimeout(() => {
        // }, 3000);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
