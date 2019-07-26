import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoServiceService } from '../service/produto-service.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro1',
  templateUrl: './cadastro1.page.html',
  styleUrls: ['./cadastro1.page.scss'],
})
export class Cadastro1Page implements OnInit {

  produto: Produto;

  constructor(private produtoService: ProdutoServiceService,
              private alertController: AlertController, 
              private router : Router) { }

  ngOnInit() {
    this.produto = new Produto();
  }

  salvar() {
      this.produtoService.create(this.produto).subscribe( novo => {
          console.log("Produto "+ novo.productName+ " cadastrado com sucesso!");
          this.presentAlert(novo.productName, " cadastrato com sucesso!");
          this.router.navigate(['/tab1']);
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
