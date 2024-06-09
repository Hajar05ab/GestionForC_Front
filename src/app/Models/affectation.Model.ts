import { Beneficiaire } from 'src/app/Models/beneficiaire.Model';

export interface Affectation {
  id?: number;
  numGrp: number;
  beneficiaire: Beneficiaire;
}