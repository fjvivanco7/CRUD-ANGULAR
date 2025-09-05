import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonService } from './person.service';
import { Person } from './person.model';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container py-4">
      <div class="mb-3">
        <a class="btn btn-info btn-animated d-inline-flex align-items-center gap-2" routerLink="/">
          <img src="https://img.icons8.com/fluency/24/home.png" alt="Inicio" style="width:22px; height:22px;"> Volver al inicio
        </a>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h3 class="m-0">Personas</h3>
        <a class="btn btn-warning btn-animated d-flex align-items-center gap-2" routerLink="/personas/new">
          <span style="font-size:1.3rem;">🏴‍☠️</span> Nueva
        </a>
      </div>
      <div *ngIf="message" class="alert alert-success">{{ message }}</div>
      <div *ngIf="error" class="alert alert-danger">{{ error }}</div>
      <div *ngIf="loading" class="text-center my-4">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
      </div>
      <div class="table-responsive" *ngIf="!loading">
  <table class="table table-striped align-middle table-dynamic">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Ocupación</th>
              <th>Recompensa</th>
              <th class="text-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of persons">
              <td>{{ p.id }}</td>
              <td>{{ p.name }}</td>
              <td>{{ p.age }}</td>
              <td>{{ p.ocupacion }}</td>
              <td>{{ p.recompensa | currency:'USD' }}</td>
              <td class="text-end">
                <a class="btn btn-sm btn-primary btn-animated d-inline-flex align-items-center gap-1 me-2" [routerLink]="['/personas', p.id, 'edit']">
                  <img src="https://img.icons8.com/color/20/edit--v1.png" alt="Editar"> Editar
                </a>
                <button class="btn btn-sm btn-danger btn-animated d-inline-flex align-items-center gap-1" (click)="onDelete(p)">
                  <img src="https://img.icons8.com/color/20/delete-sign--v1.png" alt="Eliminar"> Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class PersonListComponent {
  persons: Person[] = [];
  loading = false;
  message: string|null = null;
  error: string|null = null;

  constructor(private personService: PersonService) {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.message = null;
    this.error = null;
    this.personService.getAll().subscribe({
      next: data => {
        this.persons = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Error al listar personas';
        this.loading = false;
      }
    });
  }

  onDelete(item: Person): void {
    if (!item.id) return;
    if (confirm(`¿Eliminar a "${item.name}"?`)) {
      this.loading = true;
      this.message = null;
      this.error = null;
      this.personService.delete(item.id).subscribe({
        next: () => {
          this.message = 'Persona eliminada correctamente';
          this.load();
        },
        error: err => {
          this.error = 'Error al eliminar persona';
          this.loading = false;
        }
      });
    }
  }
}
