import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ForContinue } from 'src/app/Models/forcontinue.Model';

@Component({
  selector: 'app-forcontinue-dialog',
  templateUrl: './forcontinue-dialog.component.html',
  styleUrls: ['./forcontinue-dialog.component.scss']
})
export class ForcontinueDialogComponent {
  forContinues: ForContinue[] = [];


  constructor(
    public activeModal: NgbActiveModal // Injectez NgbActiveModal
  ) {}

  save() {
    this.activeModal.close(this.forContinues);
  }

  onNoClick(): void {
    this.activeModal.dismiss('Cross click'); // Fermez la modal
  }

}
