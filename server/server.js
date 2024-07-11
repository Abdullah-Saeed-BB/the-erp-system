const express = require("express");

const app = express();
app.use(express.json());

// Routes
const productsRoute = require("./routes/productsRoute");
const salesRepRoute = require("./routes/salesRepRoute");
const salesRoute = require("./routes/salesRoute");

app.use("/api/products", productsRoute);
app.use("/api/salesreps", salesRepRoute);
app.use("/api/sales", salesRoute);

app.listen(4000, () => {
  console.log("Succefull connection at 4000 port");
});
