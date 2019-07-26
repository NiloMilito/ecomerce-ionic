import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsuarioServiceService } from '../service/usuario-service.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.page.html',
  styleUrls: ['./cadastro2.page.scss'],
})
export class Cadastro2Page implements OnInit {

  user: User;

  constructor(private usuarioService: UsuarioServiceService,
              private alertController: AlertController, 
              private router : Router) { }

  ngOnInit() {
    this.user = new User();
  }

  salvar() {
    this.usuarioService.create(this.user).subscribe( novo => {
      if(novo){
        this.presentAlert(novo.username, " cadastrato com sucesso!");
        this.router.navigate(['/tab2']);
      } else {
        this.presentAlert("Erro", "Erro no cadastro!!");
      }       
    }, erro =>{
      this.presentAlert("Erro", erro.message);
    }, () => {
       
    })
}

async presentAlert(titulo: any, message: any) {
  const alert = await this.alertController.create({
    header: titulo,
    message: message ,
    buttons: ['OK']
  });
  await alert.present();
}

}
