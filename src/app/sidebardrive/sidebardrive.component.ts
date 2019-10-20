import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'sidebar-drive',
  template:`
  <h2 class="mb-3 color-brand"> <b>{{drive.value }} GB <span class="color-gray float-right"> {{drive.total }} GB</span></b></h2>
  <h2 class="small mb-3 color-gray">Used <span class="color-brand2 float-right">Upgrade</span></h2>
  <div class="progress mb-5" style="height:7px">
    <div class="progress-bar bg-danger" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar bg-warning" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar bg-success" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
 
  <ul class="mt-0 list-unstyled">
    <li class="media mb-4" *ngFor="let t of types">
    <span class="badge badge-{{t.classname}} x_badge mr-2"> <i class="uil uil-{{t.icon}}"></i> </span>
      <div class="media-body">
        <h5 class="mt-0 mb-1">{{t.name}} <span class="spanb float-right">{{t.total}} GB</span></h5>
        <div class="color-gray spansmall">{{t.files}} files</div>
      </div>
    </li>
  </ul>  

  <div class="upgradediv mt-4">
    <img src="../assets/upgrade.jpg"/>
    <h2>Upgrade account</h2>
    <h4>5 integrations, 30 team members, <br/> advanced features for teams</h4>
    <a class="btn btn-lg btn-primary">Upgrade</a>
  </div>
`
 })

 
 

export class SidebardriveComponent {
  drive;
  types;
  constructor() { 
    let serv = new DataService();
    this.drive = serv.getdrive();
    this.types = serv.gettypes();
   }
  
}
