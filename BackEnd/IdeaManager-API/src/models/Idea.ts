import {uuid} from "UuidV4"
import Tech from './Tech'
import {Entity} from 'typeorm'

class Idea{
    id: string;
    name: string;
    alias:string;
    purpose: string;
    description: string;
    creationDate: Date;
    techs: Tech[];
    isDone: boolean;
    beginDate: Date|null;
    endDate: Date|null;

    constructor({name,purpose,description,creationDate}: Omit<Idea,"id"|"techs"|"isDone"|"beginDate"|"endDate"|"alias">){
        this.id= uuid();
        this.name= name;
        this.alias = name.split(' ').join('').toLowerCase();
        this.purpose= purpose;
        this.description= description;
        this.creationDate= creationDate;
        this.techs= [];
        this.isDone= false;
        this.beginDate= null;
        this.endDate= null;
    }

}

export default Idea