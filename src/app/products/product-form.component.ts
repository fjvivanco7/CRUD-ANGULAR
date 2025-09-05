import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
				<div class="container py-4">
					<div class="form-modern mx-auto">
						<h3>{{ isEdit ? 'Editar' : 'Nuevo' }} producto</h3>
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
                    <label class="form-label">Precio</label>
                    <input type="number" class="form-control" formControlName="price" />
                    <div class="text-danger small" *ngIf="submitted && form.controls['price'].invalid">
                        Precio válido mayor o igual a 0
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Stock</label>
                    <input type="number" class="form-control" formControlName="stock" />
                    <div class="text-danger small" *ngIf="submitted && form.controls['stock'].invalid">
                        Stock válido mayor o igual a 0
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

export class ProductFormComponent implements OnInit {
form;

isEdit = false; // indica si estamos editando
private productId?: number; // id actual al editar
submitted = false; // flag para mostrar errores
message: string | null = null;
error: string | null = null;

constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
) {
    this.form = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        price: [0, [Validators.required, Validators.min(0)]],
        stock: [0, [Validators.required, Validators.min(0)]]
    });
}

ngOnInit(): void {
const idParam = this.route.snapshot.paramMap.get('id'); // lee :id de la ruta
if (idParam) {
this.isEdit = true;
this.productId = Number(idParam);
// Cargar datos existentes
this.productService.getById(this.productId).subscribe({
next: (p) => this.form.patchValue(p),
error: (err) => console.error('Error al cargar producto', err)
});
}
}

onSubmit(): void {
  this.submitted = true;
  this.message = null;
  this.error = null;
  console.log('submit', this.form.value, this.form.valid);
  if (this.form.invalid) return;
  const raw = this.form.getRawValue();
  const payload: Product = {
    name: raw.name!,
    price: raw.price!,
    stock: raw.stock!
  };
  const request$ = this.isEdit && this.productId
    ? this.productService.update(this.productId, payload)
    : this.productService.create(payload);
  request$.subscribe({
    next: () => {
      this.message = 'Producto guardado correctamente';
      setTimeout(() => this.router.navigate(['/products']), 1000);
    },
    error: (err) => {
      this.error = 'Error al guardar producto';
      console.error('Error al guardar', err);
    }
  });
}

goBack(): void {
this.router.navigate(['/products']); // navegar sin guardar
}
}