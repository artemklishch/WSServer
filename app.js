const express = require("express");
const app = express();
const helmet = require("helmet");
const socketConnection = require("./socket");
const { setSockets } = require("./helpers/socketHandlers");
const chartRoutes = require("./routes/charts");
const { sqLiteConnect } = require("./util/database");
const port = 8080;

const hostName =
  process.env.NODE_ENV === "development"
    ? `http://localhost:${port}`
    : `https://wsserver-aaqy.onrender.com:${port}`;

app.use(helmet());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(chartRoutes);

sqLiteConnect(() => {
  const server = app.listen(port, () => {
    console.log(`The app is listening on port ${port}`);
  });

  const io = socketConnection.init(server, {
    cors: {
      origin: hostName,
      methods: ["GET", "POST", "DELETE", "PUT"],
    },
  });
  io.on("connection", setSockets);
});
