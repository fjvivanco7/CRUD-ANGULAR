import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, RouterModule],
	template: `
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" routerLink="/">Mi CRUD</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<a class="nav-link" routerLink="/" routerLinkActive="active">Inicio</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" routerLink="/products" routerLinkActive="active">Productos</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" routerLink="/personas" routerLinkActive="active">Personas</a>
						</li>
					</ul>
					<div class="d-flex align-items-center ms-auto">
						<img src="https://cdn.custom-cursor.com/packs/10917/one-piece-luffy-gear-5-pack.png" alt="Logo" style="height:48px; width:auto; object-fit:contain; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.08);" />
					</div>
				</div>
			</div>
		</nav>
		<main class="container mt-4">
			<router-outlet></router-outlet>
		</main>
	`
})
export class AppComponent {}