import Idea from "../../models/Idea";
import IdeaRepository from "../../repositories/IdeaRepository";

interface createRepoDTO {
  name: string;
  purpose: string;
  description: string;
}

class CreateIdeaService {
  private repository: IdeaRepository;

  constructor(repo: IdeaRepository) {
    this.repository = repo;
  }

  public execute({ name, purpose, description }: createRepoDTO): Idea {
    let creationDate = new Date();

    if (!name || name === "") throw Error("Idea must have a name");

    let idea = this.repository.create({
      name,
      purpose,
      description,
      creationDate,
    });

    return idea;
  }
}

export default CreateIdeaService;
