import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, RouterModule],
	template: `
		<nav class="navbar navbar-expand-lg navbar-dark onepiece-navbar">
			<div class="container-fluid onepiece-navbar-anim">
				<a class="navbar-brand onepiece-navbar-brand" routerLink="/">Mi CRUD</a>
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
										<img src="https://cdn.custom-cursor.com/packs/10917/one-piece-luffy-gear-5-pack.png" alt="Logo" class="onepiece-navbar-logo" />
									</div>
				</div>
			</div>
		</nav>
		<style>
		@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
		.onepiece-navbar {
			background: linear-gradient(90deg, #ffb347 0%, #ff4e50 100%) !important;
			box-shadow: 0 4px 24px #ff4e5055;
			border-bottom: 3px solid #fff700;
		}
		.onepiece-navbar-anim {
			animation: navbarWave 3s infinite linear alternate;
		}
		@keyframes navbarWave {
			0% { box-shadow: 0 4px 24px #ff4e5055; }
			100% { box-shadow: 0 8px 32px #f9d42399; }
		}
		.onepiece-navbar-brand {
			font-family: 'Luckiest Guy', cursive;
			font-size: 2rem;
			color: #fffbe7 !important;
			text-shadow: 2px 4px 12px #d35400, 0 2px 0 #222;
		}
		.onepiece-navbar-logo {
			height: 48px;
			width: auto;
			object-fit: contain;
			border-radius: 8px;
			box-shadow: 0 2px 8px rgba(0,0,0,0.18);
			margin-left: 8px;
			animation: logoFloat 2.5s infinite ease-in-out;
		}
		@keyframes logoFloat {
			0%, 100% { transform: translateY(0); }
			50% { transform: translateY(-10px) scale(1.08); }
		}
		</style>
		<main class="container mt-4">
			<router-outlet></router-outlet>
		</main>
	`
})
export class AppComponent {}