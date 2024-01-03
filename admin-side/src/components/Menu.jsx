import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

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
          <FoodItem restaurant={restaurant} />
        </Grid>
        <Grid item sm={12} md={12} lg={5}>
          <RestuarantCard restaurant={restaurant} />
        </Grid>
      </Grid>
    </div>
  );
}

function BlueHeader(props) {
  const navigate = useNavigate();
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
      <Button
        variant="outlined"
        style={{
          z: 1000,
          color: "black",
          marginLeft: -15,
          marginTop: 10,
          border: "1px solid black",
        }}
        onClick={() => {
          navigate("/restaurants");
          console.log("hii");
        }}
      >
        Go Back
      </Button>
      <div
        style={{
          height: 110,
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
        width: "80%",
        marginTop: "1vh",
        marginLeft: "5.5vw",
        alignItems: "center",
      }}
    >
      <div
      // style={{
      //   padding: 10,
      //   marginRight: 10,
      //   marginLeft: 10,
      // }}
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
            // backgroundColor: "yellow",
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginLeft: "19px",
            }}
          >
            <div>
              <Typography variant="h6">
                <b> Restaurant Name : </b>
                <FormControl
                  style={{
                    marginLeft: "7px",
                    marginTop: "-2px",
                    width: "20ch",
                  }}
                  variant="standard"
                >
                  <Input
                    style={{
                      marginLeft: "7px",
                      marginTop: "-2px",
                      fontSize: "20px",
                    }}
                    value={props.restaurant.title}
                  />
                </FormControl>
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
                <div>
                  <FormControl
                    fullWidth
                    style={{
                      marginLeft: "7px",
                      marginTop: "-2px",
                      width: "25ch",
                    }}
                    variant="standard"
                  >
                    <Input
                      multiline={true}
                      style={{ fontSize: "20px" }}
                      value={props.restaurant.description}
                    />
                  </FormControl>
                </div>
              </Typography>
            </div>
            <div>
              <Typography variant="h6">
                <b>Offer : </b>
                <FormControl
                  fullWidth
                  style={{
                    marginLeft: "7px",
                    marginTop: "-2px",
                    width: "30ch",
                  }}
                  variant="standard"
                >
                  <Input
                    multiline={true}
                    style={{ fontSize: "20px" }}
                    value={props.restaurant.offer}
                  />
                </FormControl>
              </Typography>
            </div>
            <div>
              <Typography variant="h6">
                <b>Distance : </b>
                <FormControl
                  fullWidth
                  style={{
                    marginLeft: "7px",
                    marginTop: "-2px",
                    width: "7ch",
                  }}
                  variant="standard"
                >
                  <Input
                    multiline={true}
                    style={{ fontSize: "20px" }}
                    value={props.restaurant.distance}
                    endAdornment={
                      <InputAdornment position="end">Km.</InputAdornment>
                    }
                  />
                </FormControl>
              </Typography>
            </div>
            <div>
              <Typography variant="h6">
                <b>Rating : </b>
                <FormControl
                  fullWidth
                  style={{
                    marginLeft: "7px",
                    marginTop: "-2px",
                    width: "9ch",
                  }}
                  variant="standard"
                >
                  <Input
                    multiline={true}
                    style={{ fontSize: "20px" }}
                    value={props.restaurant.rating}
                    endAdornment={
                      <InputAdornment position="end">/ 5⭐</InputAdornment>
                    }
                  />
                </FormControl>
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              color: "purple",
            }}
          >
            <Button variant="contained" size={"large"} color="success">
              Update
            </Button>
          </div>
          {/* <hr style={{ width: "100%", borderTop: "1px solid black" }} />
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
          </div> */}
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

function FoodItem(props) {
  const [updateMenu, SetUpdateMenu] = useState(false);
  return (
    <div
      style={{
        marginLeft: "1.6vw",
        marginTop: "11vh",
        display: "flex",
        flexDirection: "column",
        width: "60vw",
        alignItems: "center",
        backgroundColor: "#531AAA", //rgba(255, 255, 255, 0.2)
        borderRadius: "5px",
      }}
    >
      <div>
        {props.restaurant.foodList ? (
          props.restaurant.foodList.map((food, index) => {
            return (
              <UpdateFoodCard
                food={food}
                index={index}
                key={index}
                updateMenu={updateMenu}
              />
            );
          })
        ) : (
          <p>No food items available.</p>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            color: "red",
            marginTop: "-5px",
            marginRight: "20px",
            marginBottom: "10px",
          }}
        >
          <Button
            variant="contained"
            size={"large"}
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Update
          </Button>
        </div>
      </div>

      {/* 
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
      </Card> */}
    </div>
  );
}

function UpdateFoodCard(props) {
  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 15,
        width: "55vw",
        // padding: "10px"
      }}
    >
      <Card variant="outlined">
        <div style={{ display: "flex", padding: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                width: "250px",
                height: "200px",
                border: "1px solid black",
                borderRadius: "4px",
              }}
            ></div>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <TextField
              // aria-disabled={true}
              fullWidth={true}
              label="Food Item Name"
              variant="standard"
              value={props.food.foodName}
              style={{ marginBottom: 15 }}
            ></TextField>
            <TextField
              fullWidth={true}
              label="About Food"
              variant="standard"
              value={props.food.description}
              style={{ marginBottom: 15 }}
            ></TextField>
            <TextField
              fullWidth={true}
              label="Image Link"
              variant="standard"
              value={props.food.imageLink}
              style={{ marginBottom: 15 }}
            ></TextField>
            <TextField
              fullWidth={true}
              label="Price"
              variant="standard"
              value={props.food.price}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Rs.</InputAdornment>
                ),
              }}
              // style={{ marginBottom: 15 }}
            ></TextField>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default RestaurantMenu;
