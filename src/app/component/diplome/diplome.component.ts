import { Component, OnInit } from '@angular/core';
import { DiplomeService } from 'src/app/Services/diplome.service';
import { Diplome } from 'src/app/Models/diplome.Model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiplomeDialogComponent } from './diplome-dialog/diplome-dialog.component';

@Component({
  selector: 'app-diplome',
  templateUrl: './diplome.component.html',
  styleUrls: ['./diplome.component.scss']
})
export class DiplomeComponent implements OnInit {
  diplomes: Diplome[] = [];

  constructor(private diplomeService: DiplomeService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadDiplomes();
  }

  loadDiplomes() {
    this.diplomeService.getDiplomes().subscribe(diplomes => {
      this.diplomes = diplomes;
    });
  }

  addDiplome() {
    const modalRef = this.modalService.open(DiplomeDialogComponent);
    modalRef.componentInstance.diplome = { diplomeNom: '', specialite: '', nivEtude: '' };
    modalRef.result.then((result: Diplome) => {
      if (result) {
        console.log('Adding Diplome:', result); // Log the result for debugging
        this.diplomeService.createDiplome(result).subscribe(() => {
          this.loadDiplomes();
        });
      }
    });
  }

  editDiplome(diplome: Diplome) {
    const modalRef = this.modalService.open(DiplomeDialogComponent);
    modalRef.componentInstance.diplome = { ...diplome };
    modalRef.result.then((result: Diplome) => {
      if (result && diplome.id !== undefined) {
        console.log('Updating Diplome:', result); // Log the result for debugging
        this.diplomeService.updateDiplome(diplome.id, result).subscribe(() => {
          this.loadDiplomes();
        });
      }
    });
  }

  deleteDiplome(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce diplôme ?')) {
      this.diplomeService.deleteDiplome(id).subscribe(() => {
        this.loadDiplomes();
      });
    }
  }
}
