export class Drive {
    public name:string; 
    public slug:string;
    public total:number; public value:number; perc:string
    constructor( name:string,  slug:string, total:number,  value:number, perc:string ) {
      this.name = name;
      this.slug = slug;
      this.total = total;
      this.value = value;
      this.perc= perc;
    }
  
  }