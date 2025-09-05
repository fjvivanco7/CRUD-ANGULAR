
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
	selector: 'app-product-list',
	standalone: true,
	imports: [CommonModule, RouterModule],
	template: `
		<div class="container py-4">
			<div class="d-flex justify-content-between align-items-center mb-3">
				<h3 class="m-0">Productos</h3>
				<a class="btn btn-primary" routerLink="/products/new">Nuevo</a>
			</div>
			<div *ngIf="message" class="alert alert-success">{{ message }}</div>
			<div *ngIf="error" class="alert alert-danger">{{ error }}</div>
			<div *ngIf="loading" class="text-center my-4">
				<div class="spinner-border text-primary" role="status">
					<span class="visually-hidden">Cargando...</span>
				</div>
			</div>
			<div class="table-responsive" *ngIf="!loading">
				<table class="table table-striped align-middle">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Precio</th>
							<th>Stock</th>
							<th class="text-end">Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr *ngFor="let p of products">
							<td>{{ p.id }}</td>
							<td>{{ p.name }}</td>
							<td>{{ p.price | currency:'USD' }}</td>
							<td>{{ p.stock }}</td>
							<td class="text-end">
								<a class="btn btn-sm btn-outline-secondary me-2" [routerLink]="['/products', p.id, 'edit']">Editar</a>
								<button class="btn btn-sm btn-outline-danger" (click)="onDelete(p)">Eliminar</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	`
})
export class ProductListComponent {
	products: Product[] = [];
	loading = false;
	message: string|null = null;
	error: string|null = null;

	constructor(private productService: ProductService) {
		this.load();
	}

	load(): void {
		this.loading = true;
		this.message = null;
		this.error = null;
		this.productService.getAll().subscribe({
			next: data => {
				this.products = data;
				this.loading = false;
			},
			error: err => {
				this.error = 'Error al listar productos';
				this.loading = false;
			}
		});
	}

	onDelete(item: Product): void {
		if (!item.id) return;
		if (confirm(`¿Eliminar "${item.name}"?`)) {
			this.loading = true;
			this.message = null;
			this.error = null;
			this.productService.delete(item.id).subscribe({
				next: () => {
					this.message = 'Producto eliminado correctamente';
					this.load();
				},
				error: err => {
					this.error = 'Error al eliminar producto';
					this.loading = false;
				}
			});
		}
	}
}
