import express from 'express'
import { env } from './config/environment'
import cors from 'cors'
import corsOptions from './config/cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { exampleRoute } from './routes/exampleRoute'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware '


//express
const app = express()

//cors
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('dev'))

// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({extended: true}));

//routes
app.use('/example',exampleRoute)

app.get('/',(req, res) => {
    res.send('ok')
})
//middleware error handler
app.use(errorHandlingMiddleware)

app.listen(env.APP_PORT, () => {
    console.log('Listen port '+ env.APP_PORT);
})