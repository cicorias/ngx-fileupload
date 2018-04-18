import { Component, OnInit, Input } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input() fileApiUrl: string;
  public uploader: FileUploader;
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  constructor() {
  }

  ngOnInit() {
    const foo = this.fileApiUrl;
    console.log(`fileUrl: ${this.fileApiUrl}`);
    this.uploader = new FileUploader({ url: this.fileApiUrl});
  }


  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

}


