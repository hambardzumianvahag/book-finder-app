import { TextField } from "@mui/material";
import React, { useCallback, useContext } from "react";
import { MyContext } from "./Context";

export default function Input() {
  const { value, setValue, setResult } = useContext(MyContext);

  const fetchData = useCallback(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setResult(data.items);
        } else {
          setResult([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResult([]);
      });
  }, [value, setResult]);

  return (
    <div className="Input">
      {value ? (
        <span className="Close" onClick={() => setValue("")}>
          X
        </span>
      ) : null}
      <TextField
        label="Type author, book name, subject..."
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => fetchData()}>Search</button>
    </div>
  );
}
