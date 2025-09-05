import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="onepiece-bg d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <img src="https://cdn.custom-cursor.com/packs/10917/one-piece-luffy-gear-5-pack.png" alt="Luffy" class="luffy-img mb-3" />
  <h1 class="onepiece-title mb-2">¡Zarpa hacia tu propia aventura CRUD!</h1>
  <p class="onepiece-desc mb-4">"El tesoro más grande es el conocimiento... ¡y los datos bien organizados!"<br>¿Listo para convertirte en el Rey de los CRUD?</p>
      <div class="d-flex flex-wrap justify-content-center gap-4 mb-4">
        <a class="btn btn-lg btn-warning onepiece-btn shadow" routerLink="/products">
          <span style="font-size:1.5rem;">🍖</span> Ir a Productos
        </a>
        <a class="btn btn-lg btn-danger onepiece-btn shadow" routerLink="/personas">
          <span style="font-size:1.5rem;">🏴‍☠️</span> Ir a Personas
        </a>
      </div>
  <div class="onepiece-quote mt-3">"¡No importa cuántas veces caigas, lo importante es cuántas veces te levantas!"</div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
    .onepiece-bg {
      min-height: 100vh;
      background: linear-gradient(135deg, #f9d423 0%, #ff4e50 100%), radial-gradient(circle at 80% 20%, #fff70033 0%, #ff4e5000 70%), radial-gradient(circle at 20% 80%, #ffb34733 0%, #ff4e5000 70%);
      background-blend-mode: multiply;
      position: relative;
      overflow: hidden;
    }
    .luffy-img {
      width: 140px;
      height: auto;
      filter: drop-shadow(0 8px 24px rgba(0,0,0,0.18));
      animation: bounce 2s infinite;
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-18px); }
    }
    .onepiece-title {
      font-family: 'Luckiest Guy', cursive;
      font-size: 2.5rem;
      color: #fff;
      text-shadow: 2px 4px 12px #d35400, 0 2px 0 #222;
    }
    .onepiece-desc {
      font-size: 1.25rem;
      color: #fffbe7;
      font-weight: 500;
      text-shadow: 0 1px 4px #d35400;
    }
    .onepiece-btn {
      font-family: 'Luckiest Guy', cursive;
      font-size: 1.3rem;
      padding: 0.9rem 2.2rem;
      border-radius: 2rem;
      border: none;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .onepiece-btn:hover {
      transform: scale(1.08) rotate(-2deg);
      box-shadow: 0 8px 32px #d3540099;
    }
    .onepiece-quote {
      font-family: 'Luckiest Guy', cursive;
      font-size: 1.2rem;
      color: #fffbe7;
      text-shadow: 0 1px 4px #d35400;
      letter-spacing: 1px;
    }
  `]
})
export class HomeComponent {}
