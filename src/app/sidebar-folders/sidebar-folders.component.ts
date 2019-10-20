import { Component } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'sidebar-folder',
  template: `
  <h4 class="mt-0">Storage</h4>
  <h6 class="mt-3 color-brand2">My Files</h6>
  <ul class="sidebarlinks mt-3 pl-1">
    <li *ngFor="let f of folders" class="pt-1 pb-2"> 
      <a href="#">
        <i class="uil uil-angle-right"></i> <i class="uil uil-folder"></i> &nbsp;
        {{ f.name }}
      </a>
    </li>
  </ul>
  <ul class="sidebarlinks mt-2 pl-0">
    <li class="pb-2"><a href="#">Shared with me</a></li>
    <li class="pb-2"><a href="#">Recent</a></li>
    <li class="pb-2"><a href="#">Starred</a></li>
    <li class="pb-2"><a href="#">Trash</a></li>
  </ul>
  <div class="plus_content rounded animated fadeIn" *ngIf="show_plus"> 
    <a href="#"><i class="uil uil-folder"></i> &nbsp; Folder <span class="float-right">></span></a> <hr>
    <a href="#"><i class="uil uil-file-alt"></i> &nbsp; Text Doc <span class="float-right">></span> </a><br/>
    <a href="#"><i class="uil uil-presentation-play"></i> &nbsp; Text Doc <span class="float-right">></span></a> <br/>
    <a href="#"><i class="uil uil-notebooks"></i> &nbsp; Text Doc <span class="float-right">></span></a> <br/>
    <a href="#"><i class="uil uil-ellipsis-h"></i> &nbsp; More <span class="float-right">></span></a> <br/>
  </div>
    <div class="plusbtn">
      <a class="plusbtn_text" (click)="toggle_plus()"> Create new</a>
      <span class="plusbtn_icon float-right"> 
        <a (click)="toggle_plus()">
          <i *ngIf="!show_plus" class="uil uil-plus"></i>
          <i *ngIf="show_plus" class="uil uil-minus"></i>
        </a>
      </span>
    </div>
     
  
  `
  
})
export class SidebarFoldersComponent  {
  folders;
  show_plus:boolean;
  constructor() { 
    let serv = new DataService();
    this.folders = serv.getfolders();
    this.show_plus = false;
  }

  toggle_plus=()=> {
    this.show_plus = !this.show_plus;
  }
 
}
