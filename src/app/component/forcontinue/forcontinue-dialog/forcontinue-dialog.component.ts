import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ForContinue } from 'src/app/Models/forcontinue.Model';
import {FormBuilder} from "@angular/forms";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forcontinue-dialog',
  templateUrl: './forcontinue-dialog.component.html',
  styleUrls: ['./forcontinue-dialog.component.scss']
  
})
export class ForcontinueDialogComponent  implements OnInit{
  forContinues: ForContinue[] = [];
  forcontinueForm!: FormGroup;


  constructor(private fb: FormBuilder,
    public activeModal: NgbActiveModal // Injectez NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.forcontinueForm = this.fb.group({
      duree_Jrs : this.fb.control(""),
      annee : this.fb.control("")
    })
  }


  save() {
    this.activeModal.close(this.forContinues);
  }

  onNoClick(): void {
    this.activeModal.dismiss('Cross click'); // Fermez la modal
  }

}
