export class Type {
    name:string;
    total:number;
    files:number;
    classname:string;
    icon:string;

    constructor(name?:string, total?:number, files?:number, classname?:string, icon?:string) {
        this.name=name;
        this.total= total;
        this.classname = classname;
        this.icon = icon;
        this.files = files;
    }
}

