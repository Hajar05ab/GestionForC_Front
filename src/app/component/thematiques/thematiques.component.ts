import { Component, OnInit } from '@angular/core';
import { ThematiqueService } from 'src/app/Services/thematique.service';
import { Thematique } from 'src/app/Models/thematique.Model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThematiquesDialogComponent } from './thematiques-dialog/thematiques-dialog.component';

@Component({
  selector: 'app-thematique',
  templateUrl: './thematiques.component.html',
  styleUrls: ['./thematiques.component.scss']
})
export class ThematiquesComponent implements OnInit {
  thematiques: Thematique[] = [];

  constructor(private thematiqueService: ThematiqueService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadThematiques();
  }

  loadThematiques() {
    this.thematiqueService.getThematiques().subscribe(thematiques => {
      this.thematiques = thematiques;
    });
  }

  addThematique() {
    const modalRef = this.modalService.open(ThematiquesDialogComponent);
    modalRef.componentInstance.thematique = {
      intitule: '',
      nbrJrs: 0,
      nbrGrp: 0,
      nbrForIntr: 0,
      nbrForExtr: 0,
      dateDebut: new Date(),
      dateFin: new Date()
    };
    modalRef.result.then((result: Thematique) => {
      if (result) {
        console.log('Adding Thematique:', result); // Log the result for debugging
        this.thematiqueService.createThematique(result).subscribe(() => {
          this.loadThematiques();
        });
      }
    });
  }

  editThematique(thematique: Thematique) {
    const modalRef = this.modalService.open(ThematiquesDialogComponent);
    modalRef.componentInstance.thematique = { ...thematique };
    modalRef.result.then((result: Thematique) => {
      if (result && thematique.id !== undefined) {
        console.log('Updating Thematique:', result); // Log the result for debugging
        this.thematiqueService.updateThematique(thematique.id, result).subscribe(() => {
          this.loadThematiques();
        });
      }
    });
  }

  deleteThematique(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette thématique ?')) {
      this.thematiqueService.deleteThematique(id).subscribe(() => {
        this.loadThematiques();
      });
    }
  }

}
