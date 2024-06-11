import { Beneficiaire } from 'src/app/Models/beneficiaire.Model';

export interface Abscence {
  id?: number;
  beneficiaire: Beneficiaire;
  etatAbs: string;
  dateAbs: Date;
  
}