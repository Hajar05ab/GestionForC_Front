import { Component, OnInit } from '@angular/core';
import { BeneficiaireService } from 'src/app/Services/beneficiaire.service';
import { Beneficiaire } from 'src/app/Models/beneficiaire.Model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BeneficiairesDialogComponent } from './beneficiaires-dialog/beneficiaires-dialog.component';

@Component({
  selector: 'app-beneficiaires',
  templateUrl: './beneficiaires.component.html',
  styleUrls: ['./beneficiaires.component.scss']
})
export class BeneficiairesComponent implements OnInit {
  beneficiaires: Beneficiaire[] = [];

  constructor(private beneficiaireService: BeneficiaireService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadBeneficiaires();
  }

  loadBeneficiaires() {
    this.beneficiaireService.getBeneficiaires().subscribe(beneficiaires => {
      this.beneficiaires = beneficiaires;
    });
  }

  addBeneficiaire() {
    const modalRef = this.modalService.open(BeneficiairesDialogComponent);
    modalRef.componentInstance.beneficiaire = {
      cne: '',
      nom: '',
      telephone: '',
      email: '',
      affectation: [],
      diplome: [],
      forContinue: [],
      thematiques: []
    };
    modalRef.result.then((result: Beneficiaire) => {
      if (result) {
        console.log('Adding Beneficiaire:', result); // Log the result for debugging
        this.beneficiaireService.createBeneficiaire(result).subscribe(() => {
          this.loadBeneficiaires();
        });
      }
    });
  }

  editBeneficiaire(beneficiaire: Beneficiaire) {
    const modalRef = this.modalService.open(BeneficiairesDialogComponent);
    modalRef.componentInstance.beneficiaire = { ...beneficiaire };
    modalRef.result.then((result: Beneficiaire) => {
      if (result && beneficiaire.id !== undefined) {
        console.log('Updating Beneficiaire:', result); // Log the result for debugging
        this.beneficiaireService.updateBeneficiaire(beneficiaire.id, result).subscribe(() => {
          this.loadBeneficiaires();
        });
      }
    });
  }

  deleteBeneficiaire(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce bénéficiaire ?')) {
      this.beneficiaireService.deleteBeneficiaire(id).subscribe(() => {
        this.loadBeneficiaires();
      });
    }
  }
}
