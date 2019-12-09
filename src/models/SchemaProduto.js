const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    title:{
        type: String,
        required:true,
        trim:true
    },
    slug: { // o que irá compor a URL do produto. Portanto, deve ser unico e deve ter indice para facilitar uma busca. ex: PC GAMER = pc-gamer
        type: String,
        required:true,
        trim:true,
        index:true,
        unique:true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    active:{
        type:Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }],
    image:{
        type: String,
        required:true,
        trim:true
    }
});

module.exports = mongoose.model('Produto',schema);