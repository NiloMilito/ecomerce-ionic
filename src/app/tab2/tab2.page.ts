import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsuarioServiceService } from '../service/usuario-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  users: User[];
 
  constructor(private usuarioService: UsuarioServiceService,
              private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.usuarioService.getAll().subscribe(usuarios => {
      this.users = usuarios;
      this.cd.detectChanges();
    });
  }

}
