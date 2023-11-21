import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/Produto/produto.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.scss']
})


export class ListarProdutoComponent {
  constructor(private produtoService: ProdutoService) {}    
  produtos: any[] = [];

  ngOnInit() {
    this.listaProduto();
  }

  listaProduto(){
    this.produtoService.listar().subscribe(
      (dados) => {
        console.log(dados);
        this.produtos = dados;
      },
      (erro) => {
        console.error('Erro ao carregar os produtos', erro);
      }
    );
  }
 
  deletarProduto(id: number){
    this.produtoService.excluir(id);
  }  
}