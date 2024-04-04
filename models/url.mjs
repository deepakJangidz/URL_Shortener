import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique : true
    },
    originalUrl : {
        type : String,
        required : true
    },
    clickHistory : [{timeStamp:{type:Number}}]
}, {timestamp : true});

const URL = mongoose.model('url' ,urlSchema);

export default URL;