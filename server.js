const express = require("express");
const connectToMongoDB = require("./db/db");
const PORT = process.env.PORT || 5000;

connectToMongoDB();

const app = express();
app.use(express.json());

const UserRouter = require("./routes/UserRouter");
app.use("/users", UserRouter);

const CommunityRouter = require("./routes/CommunityRouter");
app.use(CommunityRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
