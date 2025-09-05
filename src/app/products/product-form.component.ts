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
			<h3>{{ isEdit ? 'Editar' : 'Nuevo' }} producto</h3>
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
				<div class="d-flex gap-2">
					<button class="btn btn-primary" type="submit">Guardar</button>
					<button class="btn btn-secondary" type="button" (click)="goBack()">Cancelar</button>
				</div>
			</form>
		</div>
	`
})

export class ProductFormComponent implements OnInit {
form;


isEdit = false; // indica si estamos editando
private productId?: number; // id actual al editar
submitted = false; // flag para mostrar errores



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
if (this.form.invalid) return; // no continuar si hay errores



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
next: () => this.router.navigate(['/products']), // volver al listado
error: (err) => console.error('Error al guardar', err)
});
}


goBack(): void {
this.router.navigate(['/products']); // navegar sin guardar
}
}