const express = require('express')
//const port = 3000
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const app = express()

// Conecction with Mongo
const  mongoose = require('mongoose')
//const uri = 'mongodb://localhost:27017/tareas'
//atlas
const uri = 'mongodb+srv://frukus:frukuss@tare-smxly.mongodb.net/ttt?retryWrites=true&w=majority'
const options = {useNewUrlParser: true,
                 useCreateIndex: true,useUnifiedTopology: true  }

mongoose.connect(uri,options).then(
  () =>{console.log('super me conecte a la bd de mongo')},
  err => {console.log(err);
  }
);


//middlewares
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Rutas en express
app.use('/api', require('./routes/tarea'))
//app.get('/', (req, res) => res.send('Hello World! con node.js'))


// meddleware of  vue static
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))

//configurancion del "puerto" para produccion
app.set('port',process.env.PORT || 3000)
app.listen(app.get('port'), () =>
console.log('Aquì casual corriendo en el puerto:', app.get('port')))