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

  public findByID(ideaId: string):Idea{
    let index = this.repo.findIndex((idea)=> idea.id === ideaId)
    return this.repo[index]
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


  public findByAlias(alias:String):Idea{
    let index = this.repo.findIndex((idea)=> idea.alias === alias)
    return this.repo[index]
  }  

  public update(ideaID:string,data:Omit<Idea,"id"|"creationDate">): Idea{
    
    let index = this.repo.findIndex((idea)=> idea.id === ideaID)

    
    let idea = {...data,id:ideaID,creationDate: this.repo[index].creationDate}

    this.repo[index] = idea

    return idea
  }
}

export default IdeaRepository
