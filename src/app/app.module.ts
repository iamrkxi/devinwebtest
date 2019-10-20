import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriveComponent } from './drive/drive.component';
import { FolderComponent } from './folder/folder.component';
import { FileComponent } from './file/file.component';
import { SidebarFoldersComponent } from './sidebar-folders/sidebar-folders.component';
import { SidebardriveComponent } from './sidebardrive/sidebardrive.component';

@NgModule({
  declarations: [
    AppComponent,
    DriveComponent,
    FolderComponent,
    FileComponent,
    SidebarFoldersComponent,
    SidebardriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
