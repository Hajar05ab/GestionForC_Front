import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Abscence } from 'src/app/Models/abscence.Model';
import { Beneficiaire } from 'src/app/Models/beneficiaire.Model';
import { BeneficiaireService } from 'src/app/Services/beneficiaire.service';

@Component({
  selector: 'app-abscences-dialog',
  templateUrl: './abscences-dialog.component.html',
  styleUrls: ['./abscences-dialog.component.scss']
})
export class AbscencesDialogComponent implements OnInit {
  abscenceForm!: FormGroup;
  abscence: Abscence = { id: 0, beneficiaire: [], etatAbs: '', dateAbs: new Date() };
  beneficiaires: Beneficiaire[] = [];

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private beneficiaireService: BeneficiaireService
  ) {}

  ngOnInit(): void {
    this.abscenceForm = this.fb.group({
      beneficiaire: [null, Validators.required],
      etatAbs: [this.abscence.etatAbs, Validators.required],
      dateAbs: [this.abscence.dateAbs, Validators.required]
    });

    this.loadBeneficiaires();
  }

  loadBeneficiaires() {
    this.beneficiaireService.getBeneficiaires().subscribe(data => this.beneficiaires = data);
  }

  save() {
    if (this.abscenceForm.valid) {
      const selectedBeneficiaire = this.abscenceForm.get('beneficiaire')?.value;
      this.abscence.beneficiaire = [selectedBeneficiaire];
      this.abscence.etatAbs = this.abscenceForm.get('etatAbs')?.value;
      this.abscence.dateAbs = this.abscenceForm.get('dateAbs')?.value;

      console.log('Updated Abscence Object:', this.abscence);
      console.log('Form Values:', this.abscenceForm.value);

      this.activeModal.close(this.abscence);
    }
  }

  cancel() {
    this.activeModal.dismiss();
  }
}
