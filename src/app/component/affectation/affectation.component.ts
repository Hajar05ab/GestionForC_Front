import { Component, OnInit } from '@angular/core';
import { Affectation } from 'src/app/Models/affectation.Model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AffectationDialogComponent } from './affectation-dialog/affectation-dialog.component';
import { AffectationService } from 'src/app/Services/affectation.service';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.scss']
})
export class AffectationComponent implements OnInit {
  affectations: Affectation[] = [];

  constructor(private affectationService: AffectationService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadAffectations();
  }

  loadAffectations() {
    this.affectationService.getAffectations().subscribe(affectations => {
      this.affectations = affectations;
    });
  }

  addAffectation() {
    const modalRef = this.modalService.open(AffectationDialogComponent);
    modalRef.componentInstance.affectation = {id: 0, numGrp: 0};
    modalRef.result.then((result: Affectation) => {
      if (result) {
        console.log('Adding Affectation:', result); // Log the result for debugging
        this.affectationService.createAffectation(result).subscribe(() => {
          this.loadAffectations();
        });
      }
    });
  }

  editAffectation(affectation: Affectation) {
    const modalRef = this.modalService.open(AffectationDialogComponent);
    modalRef.componentInstance.affectation = { ...affectation };
    modalRef.result.then((result: Affectation) => {
      if (result && affectation.id !== undefined) {
        console.log('Updating Affectation:', result); // Log the result for debugging
        this.affectationService.updateAffectation(affectation.id, result).subscribe(() => {
          this.loadAffectations();
        });
      }
    });
  }

  deleteAffectation(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette affectation ?')) {
      this.affectationService.deleteAffectation(id).subscribe(() => {
        this.loadAffectations();
      });
    }
  }
}
