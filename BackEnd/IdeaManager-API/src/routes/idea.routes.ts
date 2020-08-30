import { Router, Request, Response } from "express";
import CreateIdeaService from "../services/ideaServices/CreateIdeaService";
import UpdateIdeaByNameService from "../services/ideaServices/UpdateIdeaByNameService";
//import {CreateIdeaService,UpdateIdeaByNameService} from "../services/ideaServices" //TODO
import IdeaRepository from "../repositories/IdeaRepository";

const idearouter = Router();

let ideaRepo = new IdeaRepository();

idearouter.get("/", (request, response) => {
  try {
    let ideas = ideaRepo.all();
    return response.json(ideas);
  } catch (error) {
    response.status(400).json(error.message);
  }
});

idearouter.post("/", (request, response) => {
  try {
    let { name, purpose, description } = request.body;
    let service = new CreateIdeaService(ideaRepo);
    let idea = service.execute({ name, purpose, description });
    response.json(idea)
  } catch (error) {
    response.status(400).json(error.message);
  }
});

idearouter.get("/:id", (request, response) => {
  let { id } = request.params;
});

export default idearouter;
