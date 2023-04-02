require("dotenv");

const express = require("express");
const path = require("path");
const cors = require("cors");
const { fileURLToPath } = require("url");
const expressLayouts = require("express-ejs-layouts");

// import appRoute from "./routes/appRoute.js";
// import userRoute from "./routes/userRoute.js";
// import adminRoute frp
const { appRoute } = require("./routes/index.js");

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// console.log(__dirname);
const app = express();
// middlewares;
app.use(cors());
// EJS
app.use(express.static(path.join(__dirname, "static")));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
// routes
app.use("/", appRoute);
//app.get("*", (req, res) => {
//	res.render("500", { layout: false });
//});
// app.use("*", (req, res) => {
// 	res.statusCode = 404;
// 	res.send(
// 		`Path "${req.baseUrl}" with method ${req.method} not found.`
// 	);
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

module.exports = app;
