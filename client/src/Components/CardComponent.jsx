import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

function CardComponent() {
  const array = [
    {
      name: "skytowers",
      place: "Indiranagar",
      price: 5550050,
      image:
        "https://images.unsplash.com/photo-1533280385001-c32ffcbd52a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nJTIwdG93ZXIlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "brigade triangle",
      place: "vijayanagar",
      price: 999999,
      image:
        "https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "towerex",
      place: "koramangla",
      price: 666666,
      image:
        "https://images.unsplash.com/photo-1524235325756-750277bf9ac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGlnaCUyMHJpc2UlMjBnbGFzcyUyMGJ1aWxkaW5nJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <>
      {array.map((obj) => (
        <Card
          sx={{
            maxWidth: 345,
            minWidth: "250px",
            margin: "10px",
            borderRadius: "20px",
          }}
        >
          <CardActionArea>
            <CardContent>
              <CardMedia
                sx={{ borderRadius: "20px" }}
                component="img"
                height="140"
                image={obj.image}
                alt="green iguana"
              />

              <Typography gutterBottom variant="h5" component="div">
                {obj.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {obj.place}
              </Typography>
              <Typography variant="body2" color="">
                Rs.{obj.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

export default CardComponent;
