import Idea from "../../models/Idea";
import IdeaRepository from "../../repositories/IdeaRepository";

class UpdateIdeaByAliasService {
  private repository: IdeaRepository;

  constructor(repo: IdeaRepository) {
    this.repository = repo;
  }

  public execute(alias:string,data: Omit<Idea, "id"|"alias"|"creationDate">): Idea {
    let {
      name,
      purpose,
      description,      
      techs,
      isDone,
      beginDate,
      endDate,
    } = data;

    let Idea = this.repository.findByAlias(alias);

    if (!Idea) throw Error("Idea Not Found!");

    let updateObject = {
      name: (name === Idea.name ? Idea.name : name) ,
      alias: name.split(' ').join('').toLowerCase(),
      purpose: (purpose === Idea.purpose ? Idea.purpose :purpose ),
      description:(description === Idea.description ? Idea.description : description),
      techs:(techs === Idea.techs ? Idea.techs :techs ),
      isDone:(isDone === Idea.isDone ? Idea.isDone : isDone),
      beginDate:(beginDate === Idea.beginDate ? Idea.beginDate :beginDate ),
      endDate: (endDate === Idea.endDate ? Idea.endDate :endDate ),
    };

    Idea = this.repository.update(Idea.id, updateObject);

    return Idea
  }
}

export default UpdateIdeaByAliasService