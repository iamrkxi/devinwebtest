import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-folder',
  template: `
  <h4>Folders <small class="float-right" style="font-size:.9rem">View all</small></h4>
  <div class="card-columns block mt-4">
  <div class="card text-left p-1 border-0 mb-5 rounded-lg" *ngFor="let f of folders" >
    <div class="card-body x_card_2">
      <i class="uil uil-folder"></i>
      <span class="float-right">
        <span *ngFor="let pp of f.people | slice:0:3">
          <img src="../assets/users/{{pp.code}}.jpg" class="avatarimg border border-{{pp.classname}}"/>
        </span>
        <span class="usersplus" *ngIf="f.people.length>3">+{{f.people.length-3}}</span>
      </span>
      <h6 class="card-title mt-1 mb-1"> <b>{{f.name}}</b><br/>
      <small class="color-gray"> {{f.files}} files </small></h6>
        
    </div>
  </div>
  </div>
  `
  
})

export class FolderComponent  {

  folders;
  constructor() { 
     let serv = new DataService();
    this.folders = serv.getfolders().slice (0,3);
  }
}
