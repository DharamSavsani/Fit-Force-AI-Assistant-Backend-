const express = require("express");
const connectToMongoDB = require("./db/db");
const PORT = 5000;
const cors = require("cors");

connectToMongoDB();

const app = express();
app.use(express.json());
app.use(cors());

const UserRouter = require("./routes/UserRouter");
app.use("/users", UserRouter);

const CommunityRouter = require("./routes/CommunityRouter");
app.use(CommunityRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
