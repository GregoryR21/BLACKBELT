const mongoose = require('mongoose');


const DogSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"An animal must have a name."],
        minlength:[3,"Name must be at least 3 characters."],
        maxlength:[20,"Too Long Did Not Read"]
    },
    breed:{
        type:String,
        required:[true,"Type is required."],
        minlength:[3,"Type must be at least 3 characters."]
    },
    
    favoriteMove:{
        type:String,
        minlength:[3,"Description must be at least 3 characters."],
        default:""
    },
    isLit:{
        type:String,
        default:""
    }
    ,
    skillTwo:{
        type:String,
        default:""
    },
    skillThree:{
        type:String,
        default:""
    },
    
    
},{timestamps:true})

module.exports.Dog = mongoose.model("Dog",DogSchema)