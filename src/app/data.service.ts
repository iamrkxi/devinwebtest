import {File} from './file';
import { Type } from './type';
import { Drive } from './drive';
import {Folder} from './folder';
import {Person} from './person';

export class DataService {

    constructor() {}
    getfiles () {
        return [
            new File('How to create a case study', new Type(null,null,null,'primary', 'image'), 'pdf', 5, '03 Oct 2019'),
            new File('Competitor Analysis Template', new Type(null,null,null,'success', 'file-alt'), 'zip', 1, '05 Oct 2019'),
            new File('Guide to Data Analytics', new Type(null,null,null,'danger', 'play'), 'txt', 3, '01 Oct 2019'),
            new File('Introduction to Data Mining', new Type(null,null,null,'warning', 'file-minus'), 'pdf', 4, '20 Oct 2019'),
            new File('Invoice IV87556', new Type(null,null,null,'success', 'file-alt'), 'img', 2, '02 Oct 2019')
          ];
    }

    getdrives () {
        return [
            new Drive('Google Drive', 'google-drive', 50, 32, '32%'),
            new Drive('Dropbox', 'dropbox', 10,5, '25%'),
            new Drive('One Drive', 'cloud-upload', 20,10, '10%')
          ];
    }

    getdrive () {
        return  new Drive('Google Drive', 'google-drive', 50, 32, '32%');
    }

    gettypes() {
        return [
            new Type ('Images', 20, 1000, 'primary', 'image-v' ),
            new Type ('Documents', 20, 256, 'success', 'file' ),
            new Type ('Media Files', 20, 300, 'danger', 'play' ),
            new Type ('Other Files', 20, 27, 'warning', 'file-minus' ),
            new Type ('Unknown Files', 20, 12, 'info', 'file-question' )
          ];
    }

    getfolders() {
        return  [
            new Folder ('Analytics', 30, [new Person (1,'warning'), new Person (2,'info')]),
            new Folder ('Assets', 20, [new Person (4,'warning'), new Person (2,'info'), new Person (3,'danger'), new Person (3,'danger'), new Person (3,'danger')]),
            new Folder ('Marketing', 10, [new Person (5,'warning'), new Person (3,'danger'), new Person (3,'danger'), new Person (3,'danger'), new Person (3,'danger'), new Person (3,'danger'), new Person (3,'danger')]) ,
            new Folder ('Templates', 30, [new Person (1,'warning'), new Person (2,'info'), new Person (3,'danger')]),
            new Folder ('Projects', 20, [new Person (4,'warning'), new Person (2,'info'), new Person (3,'danger')]),
            new Folder ('Projector Courses', 10, [new Person (5,'warning'), new Person (3,'danger')]) ];
    }
}