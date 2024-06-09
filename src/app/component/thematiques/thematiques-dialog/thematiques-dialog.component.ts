import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Thematique } from 'src/app/Models/thematique.Model';

@Component({
  selector: 'app-thematique-dialog',
  templateUrl: './thematiques-dialog.component.html',
  styleUrls: ['./thematiques-dialog.component.scss']
})
export class ThematiquesDialogComponent implements OnInit {
  thematiqueForm!: FormGroup;
  thematique: Thematique = {
    id: 0,
    intitule: '',
    nbrJrs: 0,
    nbrGrp: 0,
    nbrForIntr: 0,
    nbrForExtr: 0,
    coutPedago: 0,
    dateDebut: new Date(),
    dateFin: new Date()
  }; // Initialize with default values

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.thematiqueForm = this.fb.group({
      intitule: [this.thematique.intitule, Validators.required],
      nbrJrs: [this.thematique.nbrJrs, Validators.required],
      nbrGrp: [this.thematique.nbrGrp, Validators.required],
      nbrForIntr: [this.thematique.nbrForIntr, Validators.required],
      nbrForExtr: [this.thematique.nbrForExtr, Validators.required],
      coutPedago: [this.thematique.coutPedago, Validators.required],
      dateDebut: [this.thematique.dateDebut, Validators.required],
      dateFin: [this.thematique.dateFin, Validators.required]
    });
  }

  save() {
    if (this.thematiqueForm.valid) {
      const formValues = this.thematiqueForm.value;

      // Update the `thematique` object with the form values
      this.thematique.intitule = formValues.intitule;
      this.thematique.nbrJrs = formValues.nbrJrs;
      this.thematique.nbrGrp = formValues.nbrGrp;
      this.thematique.nbrForIntr = formValues.nbrForIntr;
      this.thematique.nbrForExtr = formValues.nbrForExtr;
      this.thematique.coutPedago = formValues.coutPedago;
      this.thematique.dateDebut = formValues.dateDebut;
      this.thematique.dateFin = formValues.dateFin;

      this.activeModal.close(this.thematique); // Pass the updated `thematique` object
    }
  }

  onNoClick(): void {
    this.activeModal.dismiss('Cross click'); // Fermez la modal
  }
}
