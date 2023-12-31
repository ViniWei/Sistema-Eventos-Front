import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Produto } from 'src/app/services/Produto/Produto';
import { ProdutoService } from 'src/app/services/Produto/produto.service';
import { Location, provideCloudflareLoader } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
  formulario: any;
  tituloFormulario: string = 'Organizadores';
  constructor(private location: Location, private produtoService: ProdutoService, private activeRoute: ActivatedRoute) { }
  idProdutoAlterar: string | null = null;

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => { this.idProdutoAlterar = params['idProduto'] });

    this.tituloFormulario = 'Produto';
    this.formulario = new FormGroup({  
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      preco: new FormControl(0, [Validators.required, Validators.min(0)]),
      organizadorId: new FormControl(localStorage.getItem("idOrganizador"), Validators.required),
     }
    )
  }

  enviarFormulario(): void {
    const produto: Produto = this.formulario.value;
    if(this.idProdutoAlterar == null){
      this.produtoService.cadastrar(produto).subscribe(result => {
        this.formulario.reset();
        alert('Produto inserido com sucesso.');
      },
      error => {
        console.error('Erro ao alterar o produto:', error);
        alert('Erro ao inserir o produto. Verifique o console para mais detalhes.');
      });
      return;
    }

    produto.id = +this.idProdutoAlterar;
    this.produtoService.alterar(produto).subscribe(result => {
        this.formulario.reset();
        alert('Produto alterado com sucesso.');
      },
      error => {
        console.error('Erro ao alterar o produto:', error);
        alert('Erro ao inserir o produto. Verifique o console para mais detalhes.');
      });
      return;


  }

  voltar(): void {
    this.location.back();
  }
}
