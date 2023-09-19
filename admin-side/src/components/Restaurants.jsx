/* eslint-disable react/prop-types */
import { Button, Card, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RestaurantList() {
  const [restaurants, setRestarants] = useState([]);

  // console.log("hii    " + localStorage.getItem("token"));

  const init = async () => {
    const responce = await axios.get("http://localhost:3000/admin/restro", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
    });

    setRestarants(responce.data.RestaurantList);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2vh",
        }}
      >
        {restaurants.map((restro, index) => {
          return <RestroCard key={index} restro={restro}></RestroCard>;
        })}
        {/* <AddRestaurant /> */}
      </div>
    </>
  );
}

export function RestroCard(props) {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        margin: 10,
        width: 250,
        minHeight: 320,
        padding: 10,
        paddingBottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <img
            src={props.restro.imageURL}
            style={{
              width: "100%",
              height: "auto",
              border: "1px solid black",
              borderRadius: 5,
            }}
            alt={props.restro.title}
          ></img>
        </Grid>
        <Grid item xs={12} md={12}>
          <div style={{ padding: "10px 0" }}>
            <Typography textAlign={"left"} variant="h5">
              {props.restro.title}
            </Typography>
            <Typography textAlign={"left"} variant="subtitle2">
              ({props.restro.description})
            </Typography>
            <Typography textAlign={"left"} variant="subtitle2">
              Distance : {props.restro.distance} km
            </Typography>
            <Typography textAlign={"left"} variant="h9">
              Offer : {props.restro.offer}.
            </Typography>
            <Typography textAlign={"left"} variant="subtitle2">
              Rating : {props.restro.rating}⭐
              <Typography align="right">
                <Button
                  onClick={() => {
                    navigate("/menu/" + props.restro._id);
                  }}
                >
                  View Menu
                </Button>
              </Typography>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

// export function AddRestaurant() {
//   return (
//     <>
//       {" "}
//       <Card
//         variant="outlined"
//         style={{
//           opacity: 0.5,
//           margin: 10,
//           width: 250,
//           minHeight: 250,
//           padding: 5,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "#EDEDED",
//           border: "1px solid black",
//           cursor: "pointer",
//         }}
//         onClick={() => {
//           alert("just Clicked");
//         }}
//       >
//         <div>Add new restaurant ?</div>
//       </Card>
//     </>
//   );
// }

export default RestaurantList;
