import express from 'express'
import routes from './routes'
import Cors from 'cors'
import "./database"

const app = express()
app.use(Cors())
app.use(express.json())
app.use(routes)

app.listen(3333,() =>{
    console.log('To infinity and Beyond 🧑‍🚀')
})
