import { Component, OnInit } from '@angular/core';
import { ForcontinueService } from 'src/app/Services/forcontinue.service';
import { ForContinue } from 'src/app/Models/forcontinue.Model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForcontinueDialogComponent } from './forcontinue-dialog/forcontinue-dialog.component';

@Component({
  selector: 'app-forcontinue',
  templateUrl: './forcontinue.component.html',
  styleUrls: ['./forcontinue.component.scss']
})
export class ForcontinueComponent implements OnInit {

  forContinues: ForContinue[] = [];

  constructor(private forcontinueService: ForcontinueService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadForContinues();
  }

  handleSuccessfulResponse(response: any)
{
  if (Array.isArray(response)) {
    this.forContinues = response;
  } else {
    console.error('Error: Unexpected response format', response);
  }
}

  loadForContinues() {
    console.log("++++")
    this.forcontinueService.getForContinues().subscribe(forContinues => {
      console.log("liste formation")
      console.log(forContinues)
      this.forContinues = forContinues;
    });
  }

  addForContinue() {
    const modalRef = this.modalService.open(ForcontinueDialogComponent);
    console.log(modalRef.componentInstance.data)
    modalRef.componentInstance.data = { forcontinue: {} };
    modalRef.result.then((result: ForContinue) => {
      if (result) {
        this.forcontinueService.createForContinue(result).subscribe(() => {
          console.log("ajouter")
          this.loadForContinues();
        });
      }
    });
  }

  editForContinue(forcontinue: ForContinue) {
    const modalRef = this.modalService.open(ForcontinueDialogComponent);
    modalRef.componentInstance.data = { forcontinue: { ...forcontinue } };
    modalRef.result.then((result: ForContinue) => {
      if (result) {
        this.forcontinueService.updateForContinue(forcontinue.id, result).subscribe(() => {
          this.loadForContinues();
        });
      }
    });
  }

  deleteForContinue(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette formation continue ?')) {
      this.forcontinueService.deleteForContinue(id).subscribe(() => {
        this.loadForContinues();
      });
    }
 
  }

}
