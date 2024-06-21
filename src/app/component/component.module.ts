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
import { AbscenceComponent } from './abscences/abscences.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ForcontinueDialogComponent } from './forcontinue/forcontinue-dialog/forcontinue-dialog.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from '../interceptors/app-http.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { ThematiquesDialogComponent } from './thematiques/thematiques-dialog/thematiques-dialog.component';
import { BeneficiairesDialogComponent } from './beneficiaires/beneficiaires-dialog/beneficiaires-dialog.component';
import { AffectationDialogComponent } from './affectation/affectation-dialog/affectation-dialog.component';
import { DiplomeComponent } from './diplome/diplome.component';
import { DiplomeDialogComponent } from './diplome/diplome-dialog/diplome-dialog.component';
import { AbscencesDialogComponent } from './abscences/abscences-dialog/abscences-dialog.component';
import { UtilisateurDialogComponent } from './utilisateurs/utilisateur-dialog/utilisateur-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    
  ],
  declarations: [
    ThematiquesComponent,
    BeneficiairesComponent,
    ForcontinueComponent,
    AffectationComponent,
    AbscenceComponent,
    UtilisateursComponent,
    ThematiquesDialogComponent,
    ForcontinueDialogComponent,
    BeneficiairesDialogComponent,
    AffectationDialogComponent,
    DiplomeComponent,
    DiplomeDialogComponent,
    AbscencesDialogComponent,
    UtilisateurDialogComponent,
    
    
   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass : AppHttpInterceptor, multi : true ,
      
    },
  ],
})
export class ComponentsModule { }
