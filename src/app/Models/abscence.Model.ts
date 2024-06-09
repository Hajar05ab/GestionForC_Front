import { Beneficiaire } from 'src/app/Models/beneficiaire.Model';

export interface Abscence {
  id?: number;
  etatAbs: string;
  dateAbs: Date;
  beneficiaire: Beneficiaire;
}