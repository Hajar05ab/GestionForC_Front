import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Beneficiaire } from 'src/app/Models/beneficiaire.Model';
import { Abscence } from 'src/app/Models/abscence.Model';

@Component({
  selector: 'app-abscences-dialog',
  templateUrl: './abscences-dialog.component.html',
  styleUrls: ['./abscences-dialog.component.scss']
})
export class AbscencesDialogComponent implements OnInit {
  @Input() abscence!: Abscence;
  abscenceForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.abscenceForm = this.fb.group({
      beneficiaire: [this.abscence.beneficiaire, Validators.required],
      etatAbs: [this.abscence.etatAbs, Validators.required],
      dateAbs: [this.abscence.dateAbs, Validators.required]
    });
  }

  save() {
    if (this.abscenceForm.valid) {
      const updatedAbscence: Abscence = {
        ...this.abscence,
        ...this.abscenceForm.value
      };
      this.activeModal.close(updatedAbscence);
    }
  }

  cancel() {
    this.activeModal.dismiss();
  }
}
