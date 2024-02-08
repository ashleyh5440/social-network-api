const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:3001/social-network",
    {
        userUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.set("debug", true);

module.exports = mongoose.connection;