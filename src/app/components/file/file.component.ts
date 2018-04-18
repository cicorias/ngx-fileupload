import { Component, OnInit, Input } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input() fileUrl: string;
  public uploader: FileUploader = new FileUploader({ url: this.fileUrl});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  constructor() {

  }

  ngOnInit() {
  }


  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

}


