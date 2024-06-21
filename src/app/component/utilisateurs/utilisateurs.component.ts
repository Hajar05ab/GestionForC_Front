import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/Services/utilisateur.service';
import { User } from 'src/app/Models/user.Model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilisateurDialogComponent } from './utilisateur-dialog/utilisateur-dialog.component';
import { RoleService } from 'src/app/Services/role.service';
import { Role } from 'src/app/Models/role.Model';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {
  utilisateurs: User[] = [];
  roles: Role[] = [];

  constructor(
    private utilisateurService: UtilisateurService,
    private roleService: RoleService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadUtilisateurs();
    this.loadRoles();
  }

  loadUtilisateurs() {
    this.utilisateurService.getUtilisateurs().subscribe(utilisateurs => {
      this.utilisateurs = utilisateurs;
    });
  }

  loadRoles() {
    this.roleService.getRoles().subscribe(roles => {
      this.roles = roles;
    });
  }

  addUtilisateur() {
    const modalRef = this.modalService.open(UtilisateurDialogComponent);
    modalRef.componentInstance.user = {
      username: '',
      password: '',
      roles: []
    };
    modalRef.componentInstance.roles = this.roles;
    modalRef.result.then((result: User) => {
      if (result) {
        console.log('Adding Utilisateur:', result); // Log the result for debugging
        this.utilisateurService.createUtilisateur(result).subscribe(() => {
          this.loadUtilisateurs();
        });
      }
    });
  }

  editUtilisateur(user: User) {
    const modalRef = this.modalService.open(UtilisateurDialogComponent);
    modalRef.componentInstance.user = { ...user };
    modalRef.componentInstance.roles = this.roles;
    modalRef.result.then((result: User) => {
      if (result && user.id !== undefined) {
        console.log('Updating Utilisateur:', result); // Log the result for debugging
        this.utilisateurService.updateUtilisateur(user.id, result).subscribe(() => {
          this.loadUtilisateurs();
        });
      }
    });
  }

  deleteUtilisateur(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.utilisateurService.deleteUtilisateur(id).subscribe(() => {
        this.loadUtilisateurs();
      });
    }
  }
}
