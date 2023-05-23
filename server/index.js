import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import logger from 'morgan'
import * as dotenv from 'dotenv'
dotenv.config()

import postsRoutes from './routes/posts.js'

const app = express()

dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use(logger('dev'))

app.use('/posts', postsRoutes)

//Set up database within a mongoDB instance
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on Port ${process.env.PORT}`)))
    .catch(error => console.log(error))

