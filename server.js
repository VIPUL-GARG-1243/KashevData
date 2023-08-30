const express = require("express");
const dataRoute = require("./routes/dataRoute");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/example", dataRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
