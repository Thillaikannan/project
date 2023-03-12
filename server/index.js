import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import questionRoutes from './routes/Questions.js'
import userRoutes from './routes/users.js'
import answerRoutes from './routes/Answers.js'

const app = express () ;

dotenv.config();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")

}) 

app.use('/user', userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)

const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb://sthillaikannan:stkannan@ac-rjtithi-shard-00-00.8nvwtrn.mongodb.net:27017,ac-rjtithi-shard-00-01.8nvwtrn.mongodb.net:27017,ac-rjtithi-shard-00-02.8nvwtrn.mongodb.net:27017/?ssl=true&replicaSet=atlas-e2mgqa-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) =>  console.log(err.message))