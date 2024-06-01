import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { ThematiquesComponent } from './thematiques/thematiques.component';
import { BeneficiairesComponent } from './beneficiaires/beneficiaires.component';
import { ForcontinueComponent } from './forcontinue/forcontinue.component';
import { AffectationComponent } from './affectation/affectation.component';
import { AbscencesComponent } from './abscences/abscences.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { BilanComponent } from './bilan/bilan.component';
import { ForcontinueDialogComponent } from './forcontinue/forcontinue-dialog/forcontinue-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  declarations: [
    ThematiquesComponent,
    BeneficiairesComponent,
    ForcontinueComponent,
    AffectationComponent,
    AbscencesComponent,
    UtilisateursComponent,
    BilanComponent,
    
   
  ],
})
export class ComponentsModule { }
