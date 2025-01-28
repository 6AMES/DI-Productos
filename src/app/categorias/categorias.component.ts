import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductoServiceService } from '../producto-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule, RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})

export class CategoriasComponent {
  productos: any[] = [];
  categoria: string = '';

  constructor(
    private route: ActivatedRoute,
    private ProductoService: ProductoServiceService
  ) {}

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get('categoria')!;

    this.ProductoService.getProductosPorCategoria(this.categoria);
  }

  getBannerForCategory(categoria: string): string {
    return this.ProductoService.getBannerForCategory(categoria);
  }
}
