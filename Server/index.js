const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { User, Admin, Restaurant } = require("./db/index.js");
const {
  authenticateJWT_admin,
  authenticateJWT_user,
  SECRET,
  SECRETuser,
} = require("./middlewear/index.js");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "zomato",
});

// Admin - Routes

app.get("/admin/me", authenticateJWT_admin, async (req, res) => {
  // console.log("me called");
  const admin = await Admin.findOne({ username: req.user.username });
  // console.log(admin.username);
  if (admin) {
    res.json({ username: admin.username });
  } else {
    res.status(403).json({ message: "Admin dosent exists" });
    return;
  }
});

app.post("/admin/auth0", async (req, res) => {
  const username = req.headers.username;
  const password = "Auth0_authenticated";
  const obj = { username, password };
  const newUser = new Admin(obj);
  newUser.save();
  // console.log("auth 0 calleed");
  // console.log(username);
  const token = jwt.sign({ username, role: "admin" }, SECRET, {
    expiresIn: "1h",
  });
  // console.log(token);
  res.json({ message: "Admin Logged in via Auth0", token });
});

app.post("/admin/signup", async (req, res) => {
  const { firstname, lastname, username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    res.status(403).json({ message: "Admin already exists" });
  } else {
    const obj = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
    };
    const newAdmin = new Admin(obj);
    newAdmin.save();
    const token = jwt.sign({ username, role: "admin" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Admin created successfully", token });
  }
});

app.post("/admin/login", async (req, res) => {
  const { username, password } = req.headers;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username, role: "admin" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "logged in successfully ", token });
  } else {
    res.status(403).json({ message: " Invalid username or password " });
  }
});

app.post("/admin/restro", authenticateJWT_admin, async (req, res) => {
  // console.log("hi from restro")
  const objRestro = req.body;
  const newRestaurant = new Restaurant(objRestro);
  newRestaurant.save();
  res.json({
    message: "Restaurant added successfully",
    restaurantId: newRestaurant.id,
  });
});

app.put(
  "/admin/restro/:restaurantId",
  authenticateJWT_admin,
  async (req, res) => {
    // console.log("hi from resto edit port");
    const updateRestaurantId = req.params.restaurantId;
    // console.log(updateRestaurantId)
    const restaurant = await Restaurant.findByIdAndUpdate(
      updateRestaurantId,
      req.body,
      { new: true }
    );
    if (restaurant) {
      res.json({ message: " Restaurant updated successfully :) " });
    } else {
      res.status(404).json({ message: "Restaurrant not found :( " });
    }
  }
);

app.get("/admin/restro/:restroId", authenticateJWT_admin, async (req, res) => {
  const restaurantId = req.params.restroId;
  const restaurant = await Restaurant.findById(restaurantId);
  // console.log("i was called : menu");
  if (restaurant) {
    res.json({ restaurant });
  } else {
    res.status(404).json({ message: "Restaurant not found " });
  }
});

app.post(
  "/admin/restro/:restaurantId",
  authenticateJWT_admin,
  async (req, res) => {
    const updateRestaurantId = req.params.restaurantId;
    const restaurant = await Restaurant.findById(updateRestaurantId);
    const foodItem = req.body;
    if (restaurant) {
      if (foodItem) {
        // restaurant.foodList.insert(foodItem);
        restaurant.foodList.push(foodItem);
        await restaurant.save();
        res.json({ message: "FoodItem added" });
      } else {
        res.status(404).json({ message: "Food item not found" });
      }
    } else {
      res.status(404).json({ message: "Restaurant not found" });
    }
  }
);

app.delete(
  "/admin/restro/:restaurantId/:foodId",
  authenticateJWT_admin,
  async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.restaurantId);
    if (restaurant) {
      const foodId = req.params.foodId;
      const foodIndex = restaurant.foodList.findIndex(
        (item) => item._id.toString() === foodId
      );
      if (foodIndex !== -1) {
        restaurant.foodList.splice(foodIndex, 1);
        const updatedRestaurant = await restaurant.save();
        res.json({
          message: "Food item deleted successfully",
          restaurant: updatedRestaurant,
        });
      } else {
        res.status(404).json({ message: "Food item not found" });
      }
    } else {
      res.status(404).json({ message: "Restaurant not found" });
    }
  }
);

app.get("/admin/restro", authenticateJWT_admin, async (req, res) => {
  const RestaurantList = await Restaurant.find({});
  // console.log("hi from get request");
  res.json({ RestaurantList });
});

// User - Routes

app.get("/user/me", authenticateJWT_user, async (req, res) => {
  const user = await User.findOne({ username: req.user.username });
  // console.log(user.username);
  if (user) {
    res.json({ username: user.username });
  } else {
    res.status(403).json({ message: "User dosent exists" });
    return;
  }
});

app.post("/users/signup", async (req, res) => {
  const { firstname, lastname, username, password } = req.body;
  // console.log("hi from user signn up")
  const user = await User.findOne({ username, password });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const obj = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
    };
    const newUser = new User(obj);
    newUser.save();
    const token = jwt.sign({ username, role: "user" }, SECRETuser, {
      expiresIn: "1h",
    });
    res.json({ message: "User created successfully", token });
  }
});

app.post("/users/login", async (req, res) => {
  const { username, password } = req.headers;
  // console.log("hi from user login ")
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username, role: "user" }, SECRETuser, {
      expiresIn: "1h",
    });
    res.json({ message: " logged in successfully ", token });
  } else {
    res.status(403).json({ message: "Invalid username or password " });
  }
});

app.get("/users/restro", authenticateJWT_user, async (req, res) => {
  const RestaurantList = await Restaurant.find({});
  // console.log("hi from get request");
  res.json({ RestaurantList });
});

app.get(
  "/users/restro/:restaurantId",
  authenticateJWT_user,
  async (req, res) => {
    const RestaurantId = req.params.restaurantId;
    const CurRestaurant = await Restaurant.findById(RestaurantId);
    if (CurRestaurant) {
      res.json(CurRestaurant);
    } else {
      res.status(404).json({ message: "Restaurant not found" });
    }
  }
);

app.post(
  "/users/restro/:restaurantId/:foodItem",
  authenticateJWT_user,
  async (req, res) => {
    const foodId = req.params.foodItem;
    const restroId = req.params.restaurantId;
    const userName = req.user.username;

    const restaurant = await Restaurant.findById(restroId);
    if (restaurant) {
      const foodItem = restaurant.foodList.find(
        (item) => item._id.toString() === foodId
      );
      if (foodItem) {
        const user = await User.findOne({ username: userName });
        if (user) {
          user.foodOrdered.push(foodItem);
          await user.save();
          res.json({ message: "FoodItem added to the cart" });
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(404).json({ message: "Food Item not found" });
      }
    } else {
      res.status(404).json({ message: "Restaurant not found" });
    }
  }
);

app.get("/users/foodOrdered", authenticateJWT_user, async (req, res) => {
  const UserName = req.user.username;
  const user = await User.findOne({ username: UserName });
  if (user) {
    res.json(user.foodOrdered);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.delete(
  "/users/foodOrdered/:foodId",
  authenticateJWT_user,
  async (req, res) => {
    const user = await User.findOne({ username: req.user.username });
    // console.log(user);
    const foodId = req.params.foodId;
    if (user) {
      const foodIndex = user.foodOrdered.findIndex(
        (item) => item._id.toString() === foodId
      );
      // console.log(`fodindex ${foodIndex}`);
      if (foodIndex !== -1) {
        user.foodOrdered.splice(foodIndex, 1);
        await user.save();
        res.json({ message: "Food item deleted successfully" });
      } else {
        res.status(404).json({ message: "Food item not found" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
