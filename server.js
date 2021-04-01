const mongoose = require("mongoose");
const db = require("./models");
const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});



require("./routes/exerciseroutes.js")(app);
require("./routes/htmlroutes.js")(app);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
})