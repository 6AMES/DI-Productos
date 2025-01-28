import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { CategoriasComponent } from './categorias/categorias.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categorias/:categoria', component: CategoriasComponent },
    { path: 'producto/:id', component: ProductoComponent }
];
