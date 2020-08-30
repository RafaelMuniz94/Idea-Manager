import {Router,Request,Response,NextFunction} from 'express'
import ideaRouter from './idea.routes'
import CreateMessageLogRoutesService from '../services/CreateMessageLogRoutesService'

function Log(request:Request,response:Response,next:NextFunction){
    let logService = new CreateMessageLogRoutesService(request,response)
    let message = logService.execute()
    console.time(message)
    next()
    console.timeEnd(message)
}

const routes = Router();



routes.use("/idea",ideaRouter)

export default routes