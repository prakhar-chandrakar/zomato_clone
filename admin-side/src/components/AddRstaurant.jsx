import {
  Button,
  Card,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

function AddRestaurant() {
  return (
    <>
      <BlueHeader />
      <AddCard />
    </>
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
          paddingLeft: "2vw",
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

function AddCard() {
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
            Restaurnat Details
          </Typography>
          <TextField label="Restaurant Name" size="small"></TextField>
          <TextField label="Description" size="small"></TextField>
          <div style={{ display: "flex", gap: 14 }}>
            <TextField
              label="Offer"
              size="small"
              style={{ width: 442 }}
            ></TextField>
            <TextField
              label="Rating"
              size="small"
              style={{ width: 442 }}
            ></TextField>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <TextField
              label="Restuarant Image"
              size="small"
              style={{ width: 442 }}
            ></TextField>
            <TextField
              label="Distance"
              size="small"
              style={{ width: 442 }}
            ></TextField>
          </div>
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
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              label="Food Name"
              size="small"
              style={{ width: 442 }}
            ></TextField>
            <TextField
              label="Description"
              size="small"
              style={{ width: 442 }}
            ></TextField>
          </div>
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              label="Image URL"
              size="small"
              style={{ width: 442 }}
            ></TextField>
            <TextField
              label="Price"
              size="small"
              style={{ width: 300 }}
            ></TextField>
            <ToggleButtonGroup
              color="primary"
              value={"veg"}
              exclusive
              aria-label="Platform"
              size="small"
            >
              <ToggleButton value="veg">&nbsp; Veg &nbsp;</ToggleButton>
              <ToggleButton value="nonVeg">Non-Veg</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <Button variant={"outlined"}>Add Food Item</Button>
        </Card>
      </div>
    </>
  );
}

export default AddRestaurant;
