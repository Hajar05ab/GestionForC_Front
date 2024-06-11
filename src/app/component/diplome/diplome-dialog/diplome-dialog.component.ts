import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Diplome } from 'src/app/Models/diplome.Model';

@Component({
  selector: 'app-diplome-dialog',
  templateUrl: './diplome-dialog.component.html',
  styleUrls: ['./diplome-dialog.component.scss']
})
export class DiplomeDialogComponent implements OnInit {
  diplomeForm!: FormGroup;
  diplome: Diplome = { id: 0, diplomeNom: '', specialite: '', nivEtude: '' };

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.diplomeForm = this.fb.group({
      diplomeNom: [this.diplome.diplomeNom, Validators.required],
      specialite: [this.diplome.specialite, Validators.required],
      nivEtude: [this.diplome.nivEtude, Validators.required]
    });
  }

  save() {
    if (this.diplomeForm.valid) {
      // Update the `diplome` object with the form values
      this.diplome.diplomeNom = this.diplomeForm.get('diplomeNom')?.value;
      this.diplome.specialite = this.diplomeForm.get('specialite')?.value;
      this.diplome.nivEtude = this.diplomeForm.get('nivEtude')?.value;

      // Log the values for debugging
      console.log('Updated Diplome Object:', this.diplome);
      console.log('Form Values:', this.diplomeForm.value);

      this.activeModal.close(this.diplome); // Pass the updated `diplome` object
    }
  }

  onNoClick(): void {
    this.activeModal.dismiss('Cross click'); // dismiss serves to close the modal
  }
}
