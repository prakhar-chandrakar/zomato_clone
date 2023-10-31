import {
  Button,
  Card,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function AddRestaurant() {
  const [restaurant, setRestarant] = useState({
    title: "",
    description: "",
    offer: "",
    rating: "",
    distance: "",
    imageURL: "",
    foodList: [],
  });
  console.log(restaurant.foodList);
  const UpdateRestaurant = (target, value) => {
    setRestarant((restaurant) => ({
      ...restaurant,
      [target]: value,
    }));
  };

  return (
    <div>
      {/* <BlueHeader /> */}
      <AboutRestaurant />
      {/* <AddCard UpdateRestaurant={UpdateRestaurant} /> */}
    </div>
  );
}

function AboutRestaurant() {
  return (
    <div>
      <Grid container justifyContent={"center"}>
        <Grid item sm={12} md={12} lg={3}>
          <div style={{ height: "10vh", backgroundColor: "wheat" }}>
            <Typography> hi there</Typography>
          </div>
        </Grid>
        <Grid item sm={12} md={12} lg={6.5}>
          <div style={{ height: "10vh", backgroundColor: "pink" }}></div>
        </Grid>
      </Grid>
    </div>
  );
}

function BlueHeader() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: 180,
          backgroundColor: "#068FFF",
          top: 0,
          zIndex: 0,
          marginBottom: -40,
        }}
      >
        <div
          style={{
            height: 120,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" textAlign={"center"}>
            <div
              style={{
                fontWeight: 500,
                color: "white",
                fontFamily: "Times New Roman, sans-serif",
              }}
            >
              Add New Restuarant
            </div>
          </Typography>
        </div>
      </div>
    </>
  );
}

function AddCard({ UpdateRestaurant }) {
  const [foodList, setFoodList] = useState([]);
  const [type, setType] = useState("veg");
  const [foodItem, setFoodItem] = useState({
    id: 1,
    // foodName: "",
    description: "",
    imageLink: "",
    price: "",
    type: type,
  });

  const UpdateFoodItem = (target, value) => {
    setFoodItem({
      ...foodItem,
      [target]: value,
    });
  };
  const handleTypeChange = (event) => {
    setType(event);
    UpdateFoodItem("type", event);
  };

  const handleAddFoodItem = () => {
    const updatedList = [...foodList, foodItem];
    setFoodList(updatedList);
    setFoodItem({
      ...foodItem,
      id: foodItem.id + 1,
    });
  };
  console.log(foodList);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 13,
            padding: 10,
            width: 900,
          }}
        >
          <Typography
            align="center"
            variant="h4"
            style={{
              fontWeight: 400,
              color: "black",
              fontFamily: "Times New Roman, sans-serif",
            }}
          >
            Restauranat Details
          </Typography>
          <TextField
            label="Restaurant Name"
            size="small"
            onChange={(e) => {
              UpdateRestaurant("title", e.target.value);
            }}
          ></TextField>
          <TextField
            label="Description"
            size="small"
            onChange={(e) => {
              UpdateRestaurant("description", e.target.value);
            }}
          ></TextField>
          <div style={{ display: "flex", gap: 14 }}>
            <TextField
              label="Offer"
              size="small"
              style={{ width: 442 }}
              onChange={(e) => {
                UpdateRestaurant("offer", e.target.value);
              }}
            ></TextField>
            <TextField
              label="Rating"
              size="small"
              style={{ width: 442 }}
              onChange={(e) => {
                UpdateRestaurant("rating", e.target.value);
              }}
            ></TextField>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <TextField
              label="Restuarant Image"
              size="small"
              style={{ width: 442 }}
              onChange={(e) => {
                UpdateRestaurant("imageURL", e.target.value);
              }}
            ></TextField>
            <TextField
              label="Distance"
              size="small"
              style={{ width: 442 }}
              onChange={(e) => {
                UpdateRestaurant("distance", e.target.value);
              }}
            ></TextField>
          </div>
          <hr style={{ width: "100%" }}></hr>
          <Typography
            align="center"
            variant="h4"
            style={{
              fontWeight: 400,
              color: "black",
              fontFamily: "Times New Roman, sans-serif",
            }}
          >
            Menu
          </Typography>
          <hr style={{ width: "100%" }}></hr>
          {foodList.map((food, index) => {
            console.log("hii");
            return <FoodCard food={food} key={index} />;
          })}
          <Typography
            align="center"
            variant="h6"
            style={{
              paddingLeft: 10,
              fontWeight: 500,
              color: "black",
              fontFamily: "Times New Roman, sans-serif",
            }}
          >
            Add Food Item
          </Typography>
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              required={true}
              label="Food Name"
              size="small"
              style={{ width: 442 }}
              onChange={(e) => {
                UpdateFoodItem("foodName", e.target.value);
              }}
            ></TextField>
            <TextField
              required={true}
              label="Description"
              size="small"
              style={{ width: 442 }}
              onChange={(e) => {
                UpdateFoodItem("description", e.target.value);
              }}
            ></TextField>
          </div>
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              label="Image URL"
              size="small"
              required={true}
              style={{ width: 442 }}
              onChange={(e) => {
                UpdateFoodItem("imageLink", e.target.value);
              }}
            ></TextField>
            <TextField
              required={true}
              label="Price"
              size="small"
              style={{ width: 300 }}
              onChange={(e) => {
                UpdateFoodItem("price", e.target.value);
              }}
            ></TextField>
            <ToggleButtonGroup
              color="primary"
              value={type}
              onChange={(e) => {
                handleTypeChange(e.target.value);
              }}
              exclusive
              required={true}
              aria-label="Platform"
              size="small"
            >
              <ToggleButton value="veg">&nbsp; Veg &nbsp;</ToggleButton>
              <ToggleButton value="nonVeg">Non-Veg</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <Button variant={"outlined"} onClick={handleAddFoodItem}>
            Add Food Item
          </Button>
          <Button variant="contained">Add Restuarant</Button>
        </Card>
      </div>
    </>
  );
}

function FoodCard(props) {
  const { food } = props;
  return (
    <>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Typography align="right">Food Item : {food.id}</Typography>

        <Button style={{ margin: 0, padding: 0, marginLeft: -15 }}>
          <DeleteIcon />
        </Button>
      </div>

      <div style={{ display: "flex", gap: 13 }}>
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Food Name"
          size="small"
          value={food.foodName}
          style={{ width: 442 }}
        ></TextField>
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Description"
          size="small"
          value={food.description}
          style={{ width: 442 }}
        ></TextField>
      </div>
      <div style={{ display: "flex", gap: 13 }}>
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Image URL"
          size="small"
          value={food.imageLink}
          style={{ width: 442 }}
        ></TextField>
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Price"
          size="small"
          value={food.price}
          style={{ width: 300 }}
        ></TextField>
        <ToggleButtonGroup
          InputLabelProps={{ shrink: true }}
          color="primary"
          value={food.type}
          exclusive
          aria-label="Platform"
          size="small"
        >
          <ToggleButton value="veg">&nbsp; Veg &nbsp;</ToggleButton>
          <ToggleButton value="nonVeg">Non-Veg</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
}
export default AddRestaurant;
