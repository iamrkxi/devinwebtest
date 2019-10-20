import {Person} from './person';
export class Folder {
    name:string; files:number; people:Array<Person>;
    constructor( name:string, files:number, people:Array<Person>) {
        this.name = name;
        this.people = people;
        this.files = files;
    }
}
