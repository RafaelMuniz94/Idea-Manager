import {Router,Request,Response} from 'express'
import {} from "../services/ideaServices"


const idearouter = Router()

idearouter.get('/',(request,response)=>{
    try{
        
    }catch(error){
        response.status(400).json(error.message)
    }
})


idearouter.get('/:id',(request,response) =>{
    let {id} = request.params
})



export default idearouter