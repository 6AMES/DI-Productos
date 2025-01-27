import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {
  private productos = [
    { id: 1, nombre: 'Producto X', descripcion: 'Descripción del Producto X', 
      precio: 200, imagen: 'ruta/imagen-x.jpg' },
    { id: 2, nombre: 'Producto Y', descripcion: 'Descripción del Producto Y', imagen: 'ruta/imagen-y.jpg' },
  ];
  
  constructor() { }

  getProducto(id: number) {
    const producto = this.productos.find((p) => p.id === id);
    return of(producto);
  }

  getProductos() {
    return this.productos;
  }
}
