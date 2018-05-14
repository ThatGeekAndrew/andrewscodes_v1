import { Component, Input } from '@angular/core';

import { UploadService } from '../shared/upload.service';

import { Upload } from '../shared/upload';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'upload-detail',
  templateUrl: './upload-detail.component.html',
  styleUrls: ['./upload-detail.component.scss'],
})
export class UploadDetailComponent {

  @Input() upload: Upload;

  constructor(private upSvc: UploadService, private modalService: NgbModal) { }

  checkPortrait(content: any) {
    // console.log('loaded', content)
    let pic = content.path[0];
    if(pic.naturalHeight > pic.naturalWidth){
        pic.className = 'portrait';
    }
  }

  open(content: any) {
    const modalRef = this.modalService.open( content, {
      size: 'lg',
      centered: true,
      windowClass: 'animated fadeIn',
      // backdropClass: 'blurred'
    }).result.then((result) => {
      if (result == 'delete') {
        this.upSvc.deleteUpload(this.upload);
      }
    });
  }
}
