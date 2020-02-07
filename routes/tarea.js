const express = require('express')
const router = express.Router();
const Tarea= require('../models/tarea')
// Post  pra crear una nueva Tarea
router.post('/nueva-tarea', async(req, res) =>{
  const body = req.body;
  try {
    const TareaBD = await Tarea.create(body)
    res.status(200).json(TareaBD);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'loco esta mal muy mal',
      error
    })
  }
})
//get all data
router.get('/tarea',async(req,res)=>{
  try {
    tareaBD = await Tarea.find()
    res.json(tareaBD)
  } catch (error) {
    return res.status(400).json({
      mensaje:'no se pueden ver las tareas sigue participando',
      error
    })
  }
})
// get  params id  esto servira para el front con vue
router.get('/tarea/:id',async(req,res)=>{
  const _id = req.params.id
  try {
    const tareaBD = await Tarea.findOne({_id})
    res.json(tareaBD)
  } catch (error) {
    return res.status(400).json({
      mensaje:'no se encuentra la tarea con ese ID por favor sigue particpando',
      error
    })
  }
})
//delete de una tarea por id
router.delete('/tarea/:id',async(req,res)=>{
  const _id = req.params.id
  try {
    const tareaBD = await Tarea.findByIdAndDelete({_id})
    res.json(tareaBD)
  } catch (error) {
    return res.status(400).json({
      mensaje:'por favor no cometer el error de nuevo sigue los consejios de un tutorial o amigo',
      error
    })
  }
})
//put aquì se actualiza a travez de un Body
router.put('/tarea/:id',async(req, res)=>{
  const body = req.body
  const _id = req.params.id
  try {
    const tareaBD = await Tarea.findByIdAndUpdate(_id,body,{new:true})
    res.json(tareaBD)
    console.log(tareaBD)
  } catch (error) {
    return res.status(400).json({
      mensaje:'Es mas que suficiente , tu muy toxic@, recuerda que la practica hace al maestro',
      error
    })
  }
})
module.exports = router;
