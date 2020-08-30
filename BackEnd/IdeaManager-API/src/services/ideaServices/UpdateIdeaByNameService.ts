import Idea from "../../models/Idea";
import IdeaRepository from "../../repositories/IdeaRepository";

class UpdateIdeaByNameService {
  private repository: IdeaRepository;

  constructor(repo: IdeaRepository) {
    this.repository = repo;
  }

  public execute(data: Omit<Idea, "id">): Idea {
    let {
      name,
      purpose,
      description,
      creationDate,
      techs,
      isDone,
      beginDate,
      endDate,
    } = data;

    let Idea = this.repository.findByName(name);

    if (!Idea) throw Error("Idea Not Found!");

    let updateObject = {
      name: (name === Idea.name ? Idea.name : name) ,
      purpose: (purpose === Idea.purpose ? Idea.purpose :purpose ),
      description:(description === Idea.description ? Idea.description : description),
      creationDate:(creationDate === Idea.creationDate ? Idea.creationDate :creationDate ),
      techs:(techs === Idea.techs ? Idea.techs :techs ),
      isDone:(isDone === Idea.isDone ? Idea.isDone : isDone),
      beginDate:(beginDate === Idea.beginDate ? Idea.beginDate :beginDate ),
      endDate: (endDate === Idea.endDate ? Idea.endDate :endDate ),
    };

    Idea = this.repository.update(Idea.id, updateObject);

    return Idea
  }
}

export default UpdateIdeaByNameService