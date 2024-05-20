import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { BilanComponent } from './bilan/bilan.component';
import { ForcontinueComponent } from './forcontinue/forcontinue.component';
import { AbscencesComponent } from './abscences/abscences.component';
import { BeneficiairesComponent } from './beneficiaires/beneficiaires.component';
import { ThematiquesComponent } from './thematiques/thematiques.component';
import { AffectationComponent } from './affectation/affectation.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';

export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'Login',
				component: LoginComponent
			},
			{
				path: 'Bilan',
				component: BilanComponent
			},
			{
				path: 'ForContinue',
				component: ForcontinueComponent
			},
			{
				path: 'Abscences',
				component: AbscencesComponent
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
				path: 'utilisateurs',
				component: UtilisateursComponent
			},
			{
				path: 'Logout',
				component: LoginComponent
			},
		
		]
	}
];
