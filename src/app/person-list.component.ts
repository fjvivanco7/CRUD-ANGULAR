import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Person {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h3 class="m-0">Personas</h3>
        <button class="btn btn-primary" (click)="addPerson()">Nueva</button>
      </div>
      <div *ngIf="message" class="alert alert-success">{{ message }}</div>
      <div *ngIf="error" class="alert alert-danger">{{ error }}</div>
      <div class="table-responsive">
        <table class="table table-striped align-middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th class="text-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of people">
              <td>{{ p.id }}</td>
              <td>{{ p.name }}</td>
              <td>{{ p.age }}</td>
              <td class="text-end">
                <button class="btn btn-sm btn-outline-secondary me-2" (click)="editPerson(p)">Editar</button>
                <button class="btn btn-sm btn-outline-danger" (click)="deletePerson(p)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class PersonListComponent {
  people: Person[] = [
    { id: 1, name: 'Luffy', age: 19 },
    { id: 2, name: 'Zoro', age: 21 },
    { id: 3, name: 'Nami', age: 20 }
  ];
  message: string|null = null;
  error: string|null = null;

  addPerson() {
    const name = prompt('Nombre de la persona:');
    const age = Number(prompt('Edad:'));
    if (name && !isNaN(age)) {
      const id = this.people.length ? Math.max(...this.people.map(p => p.id)) + 1 : 1;
      this.people.push({ id, name, age });
      this.message = 'Persona agregada correctamente';
      setTimeout(() => this.message = null, 1500);
    }
  }

  editPerson(p: Person) {
    const name = prompt('Nuevo nombre:', p.name);
    const age = Number(prompt('Nueva edad:', p.age.toString()));
    if (name && !isNaN(age)) {
      p.name = name;
      p.age = age;
      this.message = 'Persona actualizada';
      setTimeout(() => this.message = null, 1500);
    }
  }

  deletePerson(p: Person) {
    if (confirm(`¿Eliminar a "${p.name}"?`)) {
      this.people = this.people.filter(x => x.id !== p.id);
      this.message = 'Persona eliminada';
      setTimeout(() => this.message = null, 1500);
    }
  }
}
