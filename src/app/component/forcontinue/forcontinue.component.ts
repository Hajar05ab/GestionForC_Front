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

  loadForContinues() {
    this.forcontinueService.getForContinues().subscribe(forContinues => {
      this.forContinues = forContinues;
    });
  }

  addForContinue() {
    const modalRef = this.modalService.open(ForcontinueDialogComponent);
    modalRef.componentInstance.forcontinue = { duree_Jrs: 0, annee: new Date().getFullYear() };
    modalRef.result.then((result: ForContinue) => {
      if (result) {
        console.log('Adding ForContinue:', result); // Log the result for debugging
        this.forcontinueService.createForContinue(result).subscribe(() => {
          this.loadForContinues();
        });
      }
    });
  }

  editForContinue(forcontinue: ForContinue) {
    const modalRef = this.modalService.open(ForcontinueDialogComponent);
    modalRef.componentInstance.forcontinue = { ...forcontinue };
    modalRef.result.then((result: ForContinue) => {
      if (result && forcontinue.id !== undefined) {
        console.log('Updating ForContinue:', result); // Log the result for debugging
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
