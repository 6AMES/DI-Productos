import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoServiceService } from '../producto-service.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  productos: any[] = [];

  constructor(private productoService: ProductoServiceService) {}

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
  }
}
