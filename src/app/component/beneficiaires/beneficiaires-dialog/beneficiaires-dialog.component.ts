import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Beneficiaire } from 'src/app/Models/beneficiaire.Model';
import { ThematiqueService } from 'src/app/Services/thematique.service';
import { ForcontinueService } from 'src/app/Services/forcontinue.service';
import { AffectationService } from 'src/app/Services/affectation.service';
import { DiplomeService } from 'src/app/Services/diplome.service';
import { Thematique } from 'src/app/Models/thematique.Model';
import { ForContinue } from 'src/app/Models/forcontinue.Model';
import { Affectation } from 'src/app/Models/affectation.Model';
import { Diplome } from 'src/app/Models/diplome.Model';

@Component({
  selector: 'app-beneficiaires-dialog',
  templateUrl: './beneficiaires-dialog.component.html',
  styleUrls: ['./beneficiaires-dialog.component.scss']
})
export class BeneficiairesDialogComponent implements OnInit {
  @Input() beneficiaire!: Beneficiaire;
  beneficiaireForm!: FormGroup;
  thematiques: Thematique[] = [];
  forContinues: ForContinue[] = [];
  affectations: Affectation[] = [];
  diplomes: Diplome[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private thematiqueService: ThematiqueService,
    private forcontinueService: ForcontinueService,
    private affectationService: AffectationService,
    private diplomeService: DiplomeService
  ) {}

  ngOnInit(): void {
    this.beneficiaireForm = this.fb.group({
      cne: [this.beneficiaire.cne, Validators.required],
      nom: [this.beneficiaire.nom, Validators.required],
      telephone: [this.beneficiaire.telephone, Validators.required],
      email: [this.beneficiaire.email, [Validators.required, Validators.email]],
      affectation: [this.beneficiaire.affectation, Validators.required],
      diplome: [this.beneficiaire.diplome, Validators.required],
      forContinue: [this.beneficiaire.forContinue, Validators.required],
      thematiques: [this.beneficiaire.thematiques, Validators.required]
    });

    this.loadThematiques();
    this.loadForContinues();
    this.loadAffectations();
    this.loadDiplomes();
  }

  loadThematiques() {
    this.thematiqueService.getThematiques().subscribe(data => this.thematiques = data);
  }

  loadForContinues() {
    this.forcontinueService.getForContinues().subscribe(data => this.forContinues = data);
  }

  loadAffectations() {
    this.affectationService.getAffectations().subscribe(data => this.affectations = data);
  }

  loadDiplomes() {
    this.diplomeService.getDiplomes().subscribe(data => this.diplomes = data);
  }

  save() {
    if (this.beneficiaireForm.valid) {
      const updatedBeneficiaire = {
        ...this.beneficiaire,
        ...this.beneficiaireForm.value
      };
      this.activeModal.close(updatedBeneficiaire);
    }
  }

  cancel() {
    this.activeModal.dismiss();
  }
}
