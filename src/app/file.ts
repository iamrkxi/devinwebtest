
import {Type} from './type';
export class File {
    name:string;
    type:Type;
    classname:string;
    people:number;
    updated_at:string;

    constructor(n:string, t:Type, c:string, p:number, u:string) {
        this.name = n;
        this.type = t;
        this.classname = c;
        this.people = p;
        this.updated_at = u;
    }
}
