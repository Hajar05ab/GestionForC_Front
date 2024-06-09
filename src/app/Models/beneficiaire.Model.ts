import { Affectation } from 'src/app/Models/affectation.Model';
import { Diplome } from 'src/app/Models/diplome.Model';
import { ForContinue } from 'src/app/Models/forcontinue.Model';
import { Thematique } from 'src/app/Models/thematique.Model';

export interface Beneficiaire {
  id?: number;
  cne: string;
  nom: string;
  telephone: string;
  email: string;
  affectation: Affectation[];
  diplome: Diplome[];
  forContinue: ForContinue[];
  thematiques: Thematique[];
}