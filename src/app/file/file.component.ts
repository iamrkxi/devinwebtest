import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-file',
  template: 
    `
      <h4>Files <small class="float-right" style="font-size:.9rem">View all</small></h4>
      <table style="width:100%">
        <tr>
          <th (click)="sortby('name')">Name <i *ngIf="prop=='name'" class="uil uil-{{icon}}"></i></th>
          <th class="hidden-mobile">Members</th>
          <th class="hidden-mobile" (click)="sortby('updated_at')">Last modified <i *ngIf="prop=='updated_at'" class="uil uil-{{icon}}"></i></th>
          <th > </th>
        </tr>
        <tr *ngFor="let f of files  ">
          <td> 
            <span class="hidden-mobile badge badge-{{f.type.classname}} x_badge"> <i class="uil uil-{{f.type.icon}}"></i> </span> &nbsp; {{f.name}} 
          </td>
          <td class="hidden-mobile"> 
            <span *ngIf="f.people > 1">{{f.people}} members</span> 
            <span *ngIf="f.people == 1">Only you</span>
          </td>
          <td class="hidden-mobile"> {{f.updated_at}} </td>
          <td> <i class="uil uil-ellipsis-h"></i></td>
        </tr>
      </table>
    `
})
export class FileComponent {
  files;
  inverse;
  prop;
  icon;
  constructor() { 
    let serv = new DataService();
    this.files = serv.getfiles();
    this.inverse = false;
    this.icon = '';
  }

  sortby = function (prop) {
    this.inverse = !this.inverse;
    this.prop = prop;
    this.icon = this.inverse?'arrow-up':'arrow-down';
    if(this.prop=='name') 
      this.inverse ? (this.files.sort((a, b) => 
        (a.name < b.name) ? 1 : -1) ) : (this.files.sort((a, b) => (a.name > b.name) ? 1 : -1)) ;
    if(this.prop=='updated_at') 
      this.inverse ? (this.files.sort((a, b) => 
        (a.updated_at < b.updated_at) ? 1 : -1) ) : (this.files.sort((a, b) => (a.updated_at > b.updated_at) ? 1 : -1)) ;
  }
   
}
