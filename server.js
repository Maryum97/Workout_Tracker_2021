const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require("./routes/apiRoute.js");
const htmlRoutes = require("./routes/htmlRoute.js")

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(htmlRoutes);
app.use(apiRoutes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

app.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}`);
});