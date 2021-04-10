import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetch(page) {
  const [images, setImages] = React.useState([]);
  const [errors, setErrors] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(` https://picsum.photos/v2/list?page=${page}&limit=30`)
      .then((res) => {
        setImages([...images, ...res.data]);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(errors);
        setIsLoading(false);
      });
  }, [page]);

  return [images, setImages, errors, isLoading];
}
