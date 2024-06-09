import { Beneficiaire } from 'src/app/Models/beneficiaire.Model';

export interface Diplome {
  id?: number;
  diplomeNom: string;
  specialite: string;
  nivEtude: string;
  beneficiaire: Beneficiaire;
}