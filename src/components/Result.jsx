import React, { useContext } from "react";
import { MyContext } from "./Context";

export default function Result() {
  const { result } = useContext(MyContext);

  return (
    <div className="Result">
      {result.length === 0 ? (
        <span>Nothing to show...</span>
      ) : (
        <div className="books">
          {result.map((item, index) => (
            <div key={index} className="each-book">
              <div>
                <h4>{item.volumeInfo.title}</h4>
              </div>
              <div className="book-info">
                {item.volumeInfo.imageLinks && (
                  <img
                    src={item.volumeInfo.imageLinks.thumbnail}
                    alt={item.volumeInfo.title}
                  />
                )}
                <div>
                  <p>
                    <span>Author:</span>
                    {item.volumeInfo.authors
                      ? item.volumeInfo.authors.join(", ")
                      : "N/A"}
                  </p>
                  <p>
                    <span>Publisher:</span> {item.volumeInfo.publisher || "N/A"}
                  </p>
                  <p>
                    <span>Published Date:</span>
                    {item.volumeInfo.publishedDate || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
