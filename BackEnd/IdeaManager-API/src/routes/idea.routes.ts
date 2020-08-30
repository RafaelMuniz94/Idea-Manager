import { Router, Request, Response } from "express";
import CreateIdeaService from "../services/ideaServices/CreateIdeaService";
import UpdateIdeaByNameService from "../services/ideaServices/UpdateIdeaByAliasService";
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
    response.json(idea);
  } catch (error) {
    response.status(400).json(error.message);
  }
});

idearouter.get("/:id", (request, response) => {
  try {
    let { id } = request.params;
    let idea = ideaRepo.findByID(id);
    return response.json(idea);
  } catch (error) {
    response.status(400).json(error.message);
  }
});

idearouter.put("/:alias", (request, response) => {
  try {
    let { alias } = request.params;
    let {
      name,
      purpose,
      description,
      techs,
      isDone,
      beginDate,
      endDate,
    } = request.body;
    let service = new UpdateIdeaByNameService(ideaRepo);
    let idea = service.execute(alias, {
      name,
      purpose,
      description,
      techs,
      isDone,
      beginDate,
      endDate,
    });
    return response.json(idea);
  } catch (error) {
    response.status(400).json(error.message);
  }
});

export default idearouter;
