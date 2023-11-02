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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "30vw",
        }}
      >
        <Typography style={{ color: "white", fontSize: "70px" }}>
          Add New Restaurant
        </Typography>
      </div>
      <Grid container justifyContent={"center"} style={{ borderRadius: "5px" }}>
        <Grid item sm={12} md={12} lg={3}>
          <div
            style={{
              height: "100vh",
              backgroundColor: "wheat",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            <Card
              variant="outlined"
              style={{
                backgroundColor: "wheat",
                height: "238px",
                padding: "10px",
              }}
            >
              <Typography variant="h3">Restaurant Details</Typography>
            </Card>
            <Card
              variant="outlined"
              style={{
                backgroundColor: "wheat",
                height: "188px",
                padding: "10px",
              }}
            >
              <Typography variant="h3">Address Details</Typography>
            </Card>
            <Card
              variant="outlined"
              style={{
                backgroundColor: "wheat",
                height: "187px",
                padding: "10px",
              }}
            >
              <Typography variant="h3"> Other Details</Typography>
            </Card>
            <Card
              variant="outlined"
              style={{
                backgroundColor: "wheat",
                height: "187px",
                padding: "10px",
              }}
            >
              <Typography variant="h3"> Add Food Item </Typography>
            </Card>
          </div>
        </Grid>
        <Grid item sm={12} md={12} lg={6.5}>
          <div
            style={{
              height: "10vh",
              backgroundColor: "pink",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            <AddCard UpdateRestaurant={UpdateRestaurant} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

// function BlueHeader() {
//   return (
//     <>
//       <div
//         style={{
//           width: "100%",
//           height: 180,
//           backgroundColor: "#068FFF",
//           top: 0,
//           zIndex: 0,
//           marginBottom: -40,
//         }}
//       >
//         <div
//           style={{
//             height: 120,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <Typography variant="h2" textAlign={"center"}>
//             <div
//               style={{
//                 fontWeight: 500,
//                 color: "white",
//                 fontFamily: "Times New Roman, sans-serif",
//               }}
//             >
//               Add New Restuarant
//             </div>
//           </Typography>
//         </div>
//       </div>
//     </>
//   );
// }

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
          backgroundColor: "pink",
          // alignItems: "center",
        }}
      >
        <Card
          variant="outlined"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: 10,
            backgroundColor: "pink",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">1. Restaurant Name </Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">2. Description </Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">3. Restro Photo </Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">4. Rating </Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">5. Offers </Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
        </Card>
        <Card
          variant="outlined"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: 10,
            backgroundColor: "pink",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">1. Address </Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">2. District </Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">3. State</Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">4. PinCode </Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
        </Card>
        <Card
          variant="outlined"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: 10,
            backgroundColor: "pink",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">1. Phone Number </Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">2. Gmail </Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5"> 3. GST Number </Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5"> 3. Owner's Name </Typography>
            <TextField
              size="small"
              style={{
                marginTop: "-2px",
                width: "60ch",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
          </div>
        </Card>
        <Card
          variant="outlined"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: 10,
            backgroundColor: "pink",
          }}
        >
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
              style={{
                width: 442,
                backgroundColor: "white",
                border: "2px solid black",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              variant="standard"
              onChange={(e) => {
                UpdateFoodItem("description", e.target.value);
              }}
            ></TextField>
          </div>
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              label="Image URL"
              size="small"
              variant="filled"
              required={true}
              style={{
                width: 290,
                backgroundColor: "white",
                border: "2px solid black",
                borderRadius: "5px",
              }}
              onChange={(e) => {
                UpdateFoodItem("imageLink", e.target.value);
              }}
            ></TextField>
            <TextField
              required={true}
              label="Price"
              size="small"
              style={{ width: 290 }}
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
          // label="Restaurant Name"
          size="small"
          focused
          onChange={(e) => {
            UpdateRestaurant("title", e.target.value);
          }}
        ></TextField>
        <TextField
          // label="Description"
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
        <Typography>
          address (pincode, addlin1 state district,) phone number{" "}
        </Typography>
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
