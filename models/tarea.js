const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tareaSchema= new Schema({
  nombre:{type: String, required: [true, 'Nombre obligatorio muy necesario , indispendable']},
  descripcion:String,
  estado:{type:Boolean, default: false}
})

const Tarea = mongoose.model('Tarea',tareaSchema)

module.exports = Tarea