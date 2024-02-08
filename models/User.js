const { Schema, model } = require("mongoose"); //import modules

//mongoose schema for user
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: "Username is required",
            trim: true, 
        },
        email: {
            type: String,
            unique: true,
            required: "Username is required",
            match: [/.+@.+\..+/],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//calculates number of friends associated with user by returning friends array
UserSchema.virtual("friendCount").get(function () {
    return this.function.length;
});

const User = model("User", UserSchema);

module.exports = User;
