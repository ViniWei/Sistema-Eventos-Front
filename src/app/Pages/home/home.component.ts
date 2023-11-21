import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ProdutosComponent } from 'src/app/components/Produto/produtos/produtos.component';
import { Ingresso } from 'src/app/services/Ingresso/Ingresso';
import { IngressoService } from 'src/app/services/Ingresso/ingresso.service';
import { KitsService } from 'src/app/services/Kit/kits.service';
import { Produto } from 'src/app/services/Produto/Produto';
import { ProdutoService } from 'src/app/services/Produto/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private produtoService: ProdutoService, private ingressosService: IngressoService, private kitsService: KitsService) {}

  products: Produto[] = []
  ingressos: Ingresso[] = []

  responsiveOptions: any[] | undefined;

  ngOnInit(): void {

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    this.produtoService.listar().subscribe(
      produtos => {
        this.products = produtos

        console.log(this.products)
      },
      error => {
        console.error('Erro ao obter a lista de produtos:', error);
      }
      );
      
      this.ingressosService.listar().subscribe(
        ingressos => {
          this.ingressos = ingressos

          console.log(ingressos)
        },
        error => {
          console.error('Erro ao obter a lista de ingressos:', error);
        }
        );
        
        this.kitsService.listar().subscribe(
          kits => {
            console.log(kits)
          },
      error => {
        console.error('Erro ao obter a lista de kits:', error);
      }
    );
  }
  }
