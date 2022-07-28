import React, { useEffect, useState } from "react";
import "./Books.css";
import axios from "axios";
import Book from "./SingleBook";
import { Container, Grid } from "@mui/material";
const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={6} sx={{ margin: "0.1px" }}>
        {books &&
          books.map((book, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Book book={book} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Books;
