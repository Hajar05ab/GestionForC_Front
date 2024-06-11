import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { ForcontinueComponent } from './forcontinue/forcontinue.component';
import { AbscenceComponent } from './abscences/abscences.component';
import { BeneficiairesComponent } from './beneficiaires/beneficiaires.component';
import { ThematiquesComponent } from './thematiques/thematiques.component';
import { AffectationComponent } from './affectation/affectation.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { DiplomeComponent } from './diplome/diplome.component';

export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'Login',
				component: LoginComponent
			},
			{
				path: 'ForContinue',
				component: ForcontinueComponent
			},
			{
				path: 'Abscences',
				component: AbscenceComponent
			},
			{
				path: 'Bénéficiaires',
				component: BeneficiairesComponent
			},
			{
				path: 'Thématiques',
				component: ThematiquesComponent
			},
			{
				path: 'Affectation',
				component: AffectationComponent
			},
			{
				path: 'Utilisateurs',
				component: UtilisateursComponent
			},
			{
				path: 'Diplome',
				component: DiplomeComponent
			},
			{
				path: 'Logout',
				component: LoginComponent
			},
		
		]
	}
];
