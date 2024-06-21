import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user.Model';
import { RoleService } from 'src/app/Services/role.service';
import { Role } from 'src/app/Models/role.Model';

@Component({
  selector: 'app-utilisateur-dialog',
  templateUrl: './utilisateur-dialog.component.html',
  styleUrls: ['./utilisateur-dialog.component.scss']
})
export class UtilisateurDialogComponent implements OnInit {
  @Input() user!: User;
  @Input() roles!: Role[];
  utilisateurForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.utilisateurForm = this.fb.group({
      username: [this.user.username, Validators.required],
      password: [this.user.password, Validators.required],
      roles: [this.user.roles, Validators.required]
    });

    this.loadRoles();
  }

  loadRoles() {
    this.roleService.getRoles().subscribe(data => this.roles = data);
  }

  save() {
    if (this.utilisateurForm.valid) {
      const updatedUser = {
        ...this.user,
        ...this.utilisateurForm.value
      };
      this.activeModal.close(updatedUser);
    }
  }

  cancel() {
    this.activeModal.dismiss();
  }
}
