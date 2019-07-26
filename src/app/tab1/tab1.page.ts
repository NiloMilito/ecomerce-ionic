import { Component, OnInit} from '@angular/core';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  produtos: any[];

  constructor(private produtoService: ProdutoServiceService) {}

  ngOnInit(): void {   
    this.showProdutos();
  }

  showProdutos() {
    this.produtoService.getAll().subscribe( produtos => {
      this.produtos = produtos;
    });
  }

  cadastrar() {
    
  }


}
