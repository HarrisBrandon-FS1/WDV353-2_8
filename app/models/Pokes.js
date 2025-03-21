const mongoose = require('mongoose');

const pokeSchema = new mongoose.Schema({
    name: {
        type:String,
        unique: true,
        required: [true, "you are required to have a Pokemon"],
        trim: true,
        maxlength: [25, "That name is too long"],
    },
    type: {
        type: [String],
        required:true,
        enum: [
            "Normal",
            "Fire",
            "Fighting",
            "Water",
            "Flying",
            "Grass",
            "Poison",
            "Electric",
            "Ground",
            "Psychic",
            "Rock",
            "Ice",
            "Bug",
            "Dragon",
            "Ghost",
            "Dark",
            "Steel",
            "Fairy", 
        ],
    },
    dexNumber: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [500, "Description cannot be over 500 characters"],
    },
    leader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Leader',
    },
},
{timestamps: true}
);

module.exports = mongoose.model('Pokemon', pokeSchema);