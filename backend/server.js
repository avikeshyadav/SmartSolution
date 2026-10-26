const express = require("express");
// Importing Routes 
const cors = require("cors");
const app = express();

const port = 3000;

const Router = require("./Routes/Users");
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
]

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
  ],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
    "content-type",
  ],
};

app.use(cors(corsOptions))

app.get("/", (req, res)=>{
  res.send("Hello World, i'm From Backend.")
});

app.use("/api",Router);


app.listen(port, ()=>{
  console.log(`server running on port ${port}`);
});