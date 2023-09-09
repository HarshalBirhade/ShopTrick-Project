const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to uncaught exception");
  process.exit(1);
});

//Config path
dotenv.config({ path: "backend/config/config.env" });

//Connecting to databse
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is started on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(
    "Shutting down the connection due to Unhandled promise rejection"
  );
  server.close(() => {
    process.exit(1);
  });
});
