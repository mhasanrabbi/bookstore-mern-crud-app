import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SingleBook(props) {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };
  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        width="800"
        // height="450"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          By {author}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography gutterBottom color="text.primary">
          Price: {price} BDT
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          LinkComponent={Link}
          to={`/books/${_id}`}
          sx={{ mt: "auto" }}
          size="small "
        >
          Update
        </Button>
        <Button
          color="error"
          onClick={deleteHandler}
          sx={{ mt: "auto" }}
          size="small "
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
