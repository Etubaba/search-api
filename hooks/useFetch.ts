import { useState, useEffect } from "react";
import axios from "axios";
// import { ISugestions } from "@/interface";

const useFetch = (url: string, dependent: any) => {
  const [fetchData, setFetchData] = useState({ suggestions: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.post(url, { search: dependent });
        setFetchData(data?.data);

        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [url, dependent]);

  return { fetchData, loading };
};

export default useFetch;
