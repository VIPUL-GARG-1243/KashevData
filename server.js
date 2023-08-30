const express = require("express");
const dataRoute = require("./routes/dataRoute");
const app = express();

app.use(express.json());

app.use("/api/example", dataRoute);

app.listen(8080, () => {
    console.log(`Server is running on http://localhost:8080`);
})