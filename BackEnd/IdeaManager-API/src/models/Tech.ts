import {uuid} from 'UuidV4'


class Tech{
    id: string;
    name: string;
    lib: string;

    constructor({name,lib}:Omit<Tech,"id">){
        this.id= uuid();
        this.name= name
        this.lib= lib
    }

}

export default Tech