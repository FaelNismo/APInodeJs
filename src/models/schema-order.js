const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Custumer'
    },
    number:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
        required:true,
        default:Date.now
    },
    status: {
        type:String,
        required:true,
        enum: ['done','created'],
        default:'created'
    },
    items:[{
        quantity:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Produto'
        }
    }]
    
});
module.exports = mongoose.model('Order',schema);