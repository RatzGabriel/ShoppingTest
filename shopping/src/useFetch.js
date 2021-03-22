import { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, [URL]);
  return items;
};

export default useFetch;
