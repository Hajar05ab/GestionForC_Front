import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForContinue } from 'src/app/Models/forcontinue.Model';

@Component({
  selector: 'app-forcontinue-dialog',
  templateUrl: './forcontinue-dialog.component.html',
  styleUrls: ['./forcontinue-dialog.component.scss']
})
export class ForcontinueDialogComponent implements OnInit {
  forcontinueForm!: FormGroup;
  forcontinue: ForContinue = { id: 0, duree_Jrs: 0, annee: new Date().getFullYear() };

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.forcontinueForm = this.fb.group({
      duree_Jrs: [this.forcontinue.duree_Jrs, Validators.required],
      annee: [this.forcontinue.annee, Validators.required]
    });
  }

  save() {
    if (this.forcontinueForm.valid) {
      // Update the `forcontinue` object with the form values
      this.forcontinue.duree_Jrs = this.forcontinueForm.get('duree_Jrs')?.value;
      this.forcontinue.annee = this.forcontinueForm.get('annee')?.value;

      // Log the values for debugging
      console.log('Updated Forcontinue Object:', this.forcontinue);
      console.log('Form Values:', this.forcontinueForm.value);

      this.activeModal.close(this.forcontinue); // Pass the updated `forcontinue` object
    }
  }

  onNoClick(): void {
    this.activeModal.dismiss('Cross click'); // dismiss serves to close the modal
  }
}
