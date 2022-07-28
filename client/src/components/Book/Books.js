import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleBook from "./SingleBook";
import "./Books.css";

const URL = "http://localhost:5000/books";

const fetchBooks = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <div className="book" key={i}>
              <SingleBook book={book} />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Books;
