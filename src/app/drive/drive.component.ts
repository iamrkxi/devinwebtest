import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-drive',
  template:`
  <div class="card-columns">
  <div class="card text-left p-3 border-0 mb-5  rounded-lg"   *ngFor="let d of drives" 
  [ngClass]="{'text-white bg-info shadow':d.slug==='google-drive'}" >
    <div class="card-body x_card">
      <i class="uil uil-{{d.slug}}"></i>
      <span class="elipsis float-right"><i class="uil uil-ellipsis-h"></i></span>
      <h5 class="card-title mt-3 mb-3"><b>{{d.name}}</b></h5>
      <span> {{d.value}} GB</span>
      <span style="float:right; text-align:right"> {{d.total}} GB</span>
      <div class="progress" style="height:8px">
        
        <div class="progress-bar bg-info" [ngClass]="{'bg-warning shadow':d.slug==='google-drive'}"
         role="progressbar" [style.width] = "d.perc" 
        [attr.aria-valuenow]="d.value" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  </div>
  </div>
  `
 })

 
 

export class DriveComponent {

    drives;
    constructor() { 
      let serv = new DataService();
      this.drives = serv.getdrives();
     }
 
}
