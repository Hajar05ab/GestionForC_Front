import { Component, OnInit } from '@angular/core';
import { AbscenceService } from 'src/app/Services/abscence.service';
import { Abscence } from 'src/app/Models/abscence.Model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AbscencesDialogComponent } from './abscences-dialog/abscences-dialog.component';

@Component({
  selector: 'app-abscence',
  templateUrl: './abscences.component.html',
  styleUrls: ['./abscences.component.scss']
})
export class AbscenceComponent implements OnInit {
  abscences: Abscence[] = [];

  constructor(private abscenceService: AbscenceService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadAbscences();
  }

  loadAbscences() {
    this.abscenceService.getAbscences().subscribe(abscences => {
      this.abscences = abscences;
    });
  }

  addAbscence() {
    const modalRef = this.modalService.open(AbscencesDialogComponent);
    modalRef.componentInstance.abscence = { etatAbs: '', dateAbs: new Date() };
    modalRef.result.then((result: Abscence) => {
      if (result) {
        console.log('Adding Abscence:', result); // Log the result for debugging
        this.abscenceService.createAbscence(result).subscribe(() => {
          this.loadAbscences();
        });
      }
    });
  }

  editAbscence(abscence: Abscence) {
    const modalRef = this.modalService.open(AbscencesDialogComponent);
    modalRef.componentInstance.abscence = { ...abscence };
    modalRef.result.then((result: Abscence) => {
      if (result && abscence.id !== undefined) {
        console.log('Updating Abscence:', result); // Log the result for debugging
        this.abscenceService.updateAbscence(abscence.id, result).subscribe(() => {
          this.loadAbscences();
        });
      }
    });
  }

  deleteAbscence(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette absence ?')) {
      this.abscenceService.deleteAbscence(id).subscribe(() => {
        this.loadAbscences();
      });
    }
  }
}
