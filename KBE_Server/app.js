require("dotenv").config();
const fs = require("fs");
const https = require("https");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();

const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => { res.send("Hello World!"); });

// 인증
// app.post("/login", routes.login);
// app.post("/logout", routes.logout);
// app.get("/accesstokenrequest", routes.accTokenReq);
// app.get("/refreshtokenrequest", routes.refTokenReq);

// 아이템
app.get("/items/collections/", routes.collections);
app.get("/items/nfts/:col_id", routes.nfts);

// 거래


const HTTPS_PORT = process.env.HTTPS_PORT;

let server;
if(fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")){

  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log("https server runnning!!"));

} else {
  server = app.listen(HTTPS_PORT)
}
module.exports = server;