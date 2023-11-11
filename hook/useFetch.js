import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../constants";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `${api.api}SmartCanteen/store/dashboard`,
    params: query,
  };
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      if (error.response) {
        setError("Server responded with an error:", error.response.data);
      } else if (error.request) {
        setError("No response received from the server.");
      } else {
        setError("Error:", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
