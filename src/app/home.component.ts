import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container py-5 text-center">
      <h2 class="mb-4">Bienvenido a Mi CRUD</h2>
      <p class="lead mb-4">Selecciona una sección para comenzar:</p>
      <div class="d-flex justify-content-center gap-4">
        <a class="btn btn-lg btn-primary" routerLink="/products">Ir a Productos</a>
        <a class="btn btn-lg btn-secondary" routerLink="/personas">Ir a Personas</a>
      </div>
    </div>
  `
})
export class HomeComponent {}
