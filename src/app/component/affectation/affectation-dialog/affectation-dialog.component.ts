import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Affectation } from 'src/app/Models/affectation.Model';

@Component({
  selector: 'app-affectation-dialog',
  templateUrl: './affectation-dialog.component.html',
  styleUrls: ['./affectation-dialog.component.scss']
})
export class AffectationDialogComponent implements OnInit {
  affectationForm!: FormGroup;
  affectation: Affectation = {id: 0, numGrp: 0 };

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.affectationForm = this.fb.group({
      numGrp: [this.affectation.numGrp, Validators.required],
     
    });
  }

  save() {
    if (this.affectationForm.valid) {
      // Update the `affectation` object with the form values
      this.affectation.numGrp = this.affectationForm.get('numGrp')?.value;

      // Log the values for debugging
      console.log('Updated Affectation Object:', this.affectation);
      console.log('Form Values:', this.affectationForm.value);

      this.activeModal.close(this.affectation); // Pass the updated `affectation` object
    }
  }

  onNoClick(): void {
    this.activeModal.dismiss('Cross click'); // dismiss serves to close the modal
  }
}
