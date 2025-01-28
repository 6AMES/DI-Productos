import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoServiceService } from '../producto-service.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  categorias: any[] = [];

  constructor(private productoService: ProductoServiceService, private router: Router) {}

  ngOnInit(): void {
    this.productoService.getCategorias().subscribe((data) => {
      this.categorias = data;
      console.log('Categorías:', this.categorias);
    });
  }

  verCategoria(categoria: string) {
    this.router.navigate(['/categorias', categoria]);
  }
}
