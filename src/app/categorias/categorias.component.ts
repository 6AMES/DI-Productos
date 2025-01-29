import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductoServiceService } from '../producto-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Categoria } from '../producto-service.service';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule, RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})

export class CategoriasComponent {
  categoria: Categoria = 'SLEEPING';
  banner: string = '';
  productos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoServiceService
  ) {}

  ngOnInit(): void {
    const categoriaParam = this.route.snapshot.paramMap.get('categoria') as Categoria;
    this.categoria = categoriaParam;

    this.banner = this.productoService.getBanner(this.categoria);

    this.productoService.getProductosPorCategoria(this.categoria).subscribe((data) => {
      this.productos = data;
    });
  }
}
