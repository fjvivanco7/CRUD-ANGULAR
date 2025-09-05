import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container py-4">
      <div class="form-modern mx-auto">
  <h3>{{ isEdit ? 'Editar' : 'Nueva' }} persona</h3>
  <div *ngIf="message" class="alert alert-success">{{ message }}</div>
  <div *ngIf="error" class="alert alert-danger">{{ error }}</div>
  <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input type="text" class="form-control" formControlName="name" />
          <div class="text-danger small" *ngIf="submitted && form.controls['name'].invalid">
            Nombre requerido (mínimo 2 caracteres)
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Edad</label>
          <input type="number" class="form-control" formControlName="age" />
          <div class="text-danger small" *ngIf="submitted && form.controls['age'].invalid">
            Edad válida mayor o igual a 0
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Ocupación</label>
          <input type="text" class="form-control" formControlName="ocupacion" />
          <div class="text-danger small" *ngIf="submitted && form.controls['ocupacion'].invalid">
            Ocupación requerida (mínimo 2 caracteres)
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Recompensa</label>
          <input type="number" class="form-control" formControlName="recompensa" />
          <div class="text-danger small" *ngIf="submitted && form.controls['recompensa'].invalid">
            Recompensa válida mayor o igual a 0
          </div>
        </div>
        <div class="d-flex gap-2 mt-3">
          <button class="btn btn-warning btn-animated d-flex align-items-center gap-1" type="submit">
            <img src="https://img.icons8.com/emoji/24/000000/pirate-flag.png" alt="Pirate Flag" style="width:22px; height:22px;"> Guardar
          </button>
          <button class="btn btn-secondary btn-animated d-flex align-items-center gap-1" type="button" (click)="goBack()">
            <img src="https://img.icons8.com/ios-filled/22/000000/anchor.png" alt="Anchor" style="width:20px; height:20px;"> Cancelar
          </button>
        </div>
      </form>
      </div>
    </div>
  `
})
export class PersonFormComponent implements OnInit {
  form;
  isEdit = false;
  private personId?: number;
  submitted = false;
  message: string | null = null;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: [0, [Validators.required, Validators.min(0)]],
      ocupacion: ['', [Validators.required, Validators.minLength(2)]],
      recompensa: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEdit = true;
      this.personId = Number(idParam);
      this.personService.getById(this.personId).subscribe({
        next: (p) => {
          // Asegura que los campos extra existan aunque no estén en el backend
          this.form.patchValue({
            name: p.name,
            age: p.age,
            ocupacion: p.ocupacion ?? '',
            recompensa: p.recompensa ?? 0
          });
        },
        error: (err) => console.error('Error al cargar persona', err)
      });
    }
  }

  onSubmit(): void {
    this.submitted = true;
    this.message = null;
    this.error = null;
    if (this.form.invalid) return;
    const raw = this.form.getRawValue();
    const payload: Person = {
      name: raw.name!,
      age: raw.age!,
      ocupacion: raw.ocupacion!,
      recompensa: raw.recompensa!
    };
    const request$ = this.isEdit && this.personId
      ? this.personService.update(this.personId, payload)
      : this.personService.create(payload);
    request$.subscribe({
      next: () => {
        this.message = 'Persona guardada correctamente';
        setTimeout(() => this.router.navigate(['/personas']), 1000);
      },
      error: (err) => {
        this.error = 'Error al guardar persona';
        console.error('Error al guardar', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/personas']);
  }
}
