import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoServiceService } from '../producto-service.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})

export class ProductoComponent {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private ProductoServiceService: ProductoServiceService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.ProductoServiceService.getProducto(id).subscribe((data) => {
      this.producto = data;
    });
  }
}
