import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ForContinue } from 'src/app/Models/forcontinue.Model';
import {FormBuilder} from "@angular/forms";
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-forcontinue-dialog',
  templateUrl: './forcontinue-dialog.component.html',
  styleUrls: ['./forcontinue-dialog.component.scss']
  
})
export class ForcontinueDialogComponent  implements OnInit{
  forContinues: ForContinue[] = [];
  forcontinueForm!: FormGroup;
  forcontinue: ForContinue = {id:0, duree_Jrs: 0, annee: new Date().getFullYear() }; // Initialize with default values



  constructor(private fb: FormBuilder,
    public activeModal: NgbActiveModal, 
  ) {}

  ngOnInit(): void {
    this.forcontinueForm = this.fb.group({
      duree_Jrs: [0, Validators.required], // initialiser avec valeur par defaut 0
      annee: [new Date().getFullYear(), Validators.required] // initialiser avec current year
    });
  }


  save() {
    if (this.forcontinueForm.valid) {
      // Update the `forcontinue` object with the form values
      this.forcontinue.duree_Jrs = this.forcontinueForm.get('duree_Jrs')?.value;
      this.forcontinue.annee = this.forcontinueForm.get('annee')?.value;     
      this.activeModal.close(this.forcontinue); // Pass the updated `forcontinue` object
    }
  }

  onNoClick(): void {
    this.activeModal.dismiss('Cross click'); // dismiss sert à fermer la modal
  }

}
