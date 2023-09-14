import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Grid, TextField, Typography } from "@mui/material";

function RestaurantMenu() {
  const [restaurant, setRestarant] = useState({});
  let { restroId } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/admin/restro/${restroId}`, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setRestarant(response.data.restaurant);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(restaurant.foodList);
  return (
    <div>
      <BlueHeader restaurant={restaurant} />
      <Grid container>
        <Grid item sm={12} md={12} lg={7}>
          <UpdateCard restaurant={restaurant} />
        </Grid>
        <Grid item sm={12} md={12} lg={5}>
          <RestuarantCard restaurant={restaurant} />
        </Grid>
      </Grid>
    </div>
  );
}

function BlueHeader(props) {
  return (
    <div
      style={{
        width: "100%",
        height: 180,
        backgroundColor: "#068FFF",
        top: 0,
        paddingLeft: "2vw",
        zIndex: 0,
        marginBottom: -50,
      }}
    >
      <div
        style={{
          height: 190,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" textAlign={"center"}>
          <div
            style={{
              // marginLeft: -200,
              fontWeight: 500,
              color: "white",
              fontFamily: "Times New Roman, sans-serif",
            }}
          >
            {props.restaurant.title}
          </div>
        </Typography>
      </div>
    </div>
  );
}

function RestuarantCard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: 10,
          marginRight: 10,
          marginLeft: 10,
        }}
      >
        <Card
          style={{
            margin: 10,
            width: 450,
            minWidth: 100,
            minHeight: 100,
            borderRadius: 5,
            padding: 10,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <img
            src={props.restaurant.imageURL}
            style={{
              width: "auto",
              height: "auto",
              border: "1px solid black",
              borderRadius: 5,
              marginBottom: 5,
            }}
            alt={props.restaurant.title}
          ></img>
          <div>
            <Typography variant="h5" align="center">
              <b>About Restaurant</b>
            </Typography>
          </div>
          <hr style={{ width: "100%", borderTop: "1px solid black" }} />
          <div>
            <Typography variant="h6">
              <b>Restaurant Name :</b> {props.restaurant.title}
            </Typography>
          </div>
          <div>
            <Typography
              variant="h6"
              style={{
                display: "flex",
                gap: 10,
              }}
            >
              <div>
                <b>Description: </b>
              </div>
              <div>{props.restaurant.description}</div>
            </Typography>
          </div>
          <div>
            <Typography variant="h6">
              <b>Offer : </b> {props.restaurant.offer}
            </Typography>
          </div>
          <div>
            <Typography variant="h6">
              <b>Distance : </b>
              {props.restaurant.distance} Km
            </Typography>
          </div>
          <div>
            <Typography variant="h6">
              <b>Rating : </b>
              {props.restaurant.rating}⭐
            </Typography>
          </div>
          <hr style={{ width: "100%", borderTop: "1px solid black" }} />
          <div>
            <Typography variant="h5" align="center">
              <b>Restaurant Menu</b>
              <hr style={{ width: "100%", borderTop: "1px solid black" }} />
              <div>
                {props.restaurant.foodList ? (
                  props.restaurant.foodList.map((food, index) => {
                    return <FoodCard food={food} key={index} />;
                  })
                ) : (
                  <p>No food items available.</p>
                )}
              </div>
            </Typography>
          </div>
        </Card>
      </div>
    </div>
  );
}

function FoodCard(props) {
  return (
    <div>
      <div style={{ display: "flex", gap: 10 }}>
        <div>
          <img
            src={props.food.imageLink}
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" align="left">
            {props.food.foodName}
          </Typography>
          <Typography variant="subtitle2" align="left">
            ({props.food.description})
          </Typography>
          <Typography variant="subtitle2" align="left">
            Price ${props.food.price}
          </Typography>
        </div>
      </div>
    </div>
  );
}

function UpdateCard(props) {
  return (
    <div
      style={{
        marginTop: 70,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        // backgroundColor: "white",
      }}
    >
      <Card
        varint={"outlined"}
        style={{
          padding: 10,
          maxWidth: 700,
          width: 600,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <Typography align={"center"} variant="h5">
          Update restaurant details
        </Typography>
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth={true}
          label="Restaurant Name"
          variant="outlined"
          value={props.restaurant.title}
        ></TextField>
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth={true}
          label="Description"
          variant="outlined"
          value={props.restaurant.description}
        ></TextField>
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth={true}
          label="Offer"
          variant="outlined"
          value={props.restaurant.offer}
        ></TextField>
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth={true}
          label="Distance"
          variant="outlined"
          value={props.restaurant.distance}
        ></TextField>
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth={true}
          label="Rating"
          variant="outlined"
          value={props.restaurant.rating}
        ></TextField>
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth={true}
          label="Image URL"
          variant="outlined"
          value={props.restaurant.imageURL}
        ></TextField>
        <Typography align={"center"} variant="h5">
          Update Menu
        </Typography>
        <div>
          {props.restaurant.foodList ? (
            props.restaurant.foodList.map((food, index) => {
              return <UpdateFoodCard food={food} index={index} key={index} />;
            })
          ) : (
            <p>No food items available.</p>
          )}
        </div>
      </Card>
    </div>
  );
}

function UpdateFoodCard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <Typography align="right">Food Item : {props.index + 1}</Typography>
      <TextField
        InputLabelProps={{ shrink: true }}
        fullWidth={true}
        label="Food Item Name"
        variant="outlined"
        value={props.food.foodName}
      ></TextField>
      <TextField
        InputLabelProps={{ shrink: true }}
        fullWidth={true}
        label="About Food"
        variant="outlined"
        value={props.food.description}
      ></TextField>
      <TextField
        InputLabelProps={{ shrink: true }}
        fullWidth={true}
        label="Price"
        variant="outlined"
        value={props.food.price}
      ></TextField>
      <TextField
        InputLabelProps={{ shrink: true }}
        fullWidth={true}
        label="Image Link"
        variant="outlined"
        value={props.food.imageLink}
        style={{ marginBottom: 15 }}
      ></TextField>
    </div>
  );
}

export default RestaurantMenu;
