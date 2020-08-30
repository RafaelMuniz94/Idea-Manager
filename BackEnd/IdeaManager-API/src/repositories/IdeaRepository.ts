import Idea from "../models/Idea";

interface createRepoDTO {
  name: string;
  purpose: string;
  description: string;
  creationDate: Date
}


class IdeaRepository {
  private repo: Array<Idea>;

  constructor() {
    this.repo = [];
  }

  public create(data: createRepoDTO): Idea {
    let { name, purpose, description, creationDate } = data;

    let idea = new Idea({ name, purpose, description, creationDate });

    this.repo.push(idea);

    return idea;
  }

  public all(): Idea[]{
      return this.repo
  }

  public findByName(ideaName:String):Idea{
    let index = this.repo.findIndex((idea)=> idea.name === ideaName)
    return this.repo[index]
  }     

  public update(ideaID:string,data:Omit<Idea,"id">): Idea{
    
    let index = this.repo.findIndex((idea)=> idea.id === ideaID)

    
    let idea = {...data,id:ideaID}

    this.repo[index] = idea

    return idea
  }
}

export default IdeaRepository
