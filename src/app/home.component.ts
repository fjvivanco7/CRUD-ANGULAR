import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="onepiece-bg d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
  <div class="luffy-hero mb-3">
  <img src="https://pbs.twimg.com/media/F22qpUFWwAEVPw4.png" alt="Luffy Gear 5" class="luffy-jump hero-image" style="background:#fffbe7;object-fit:cover;" />
  </div>
  <h1 class="onepiece-title mb-4">BIENVENIDO A MI CRUD</h1>
      <div class="d-flex flex-wrap justify-content-center gap-4 mb-4">
  <a class="btn btn-lg btn-info onepiece-btn btn-animated shadow d-flex align-items-center gap-2" routerLink="/products">
    <span style="font-size:1.5rem;">🍖</span> Ir a Productos
  </a>
  <a class="btn btn-lg btn-danger onepiece-btn btn-animated shadow d-flex align-items-center gap-2" routerLink="/personas">
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
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%), linear-gradient(135deg, #f9d423 0%, #ff4e50 100%);
      background-blend-mode: screen, multiply;
      position: relative;
      overflow: hidden;
    }
    .luffy-hero {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      height: 180px;
      margin: 0 auto 1.5rem auto;
      background: linear-gradient(135deg, #fffbe7 60%, #f9d423 100%);
      border-radius: 50%;
      box-shadow: 0 8px 32px 0 rgba(30,60,114,0.18), 0 2px 8px 0 #f9d42355;
      border: 4px solid #fffbe7;
      padding: 12px;
    }
    .luffy-hero img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
      background: none;
      box-shadow: none;
    }
    .luffy-jump {
      width: 140px;
      height: auto;
      filter: drop-shadow(0 8px 24px rgba(0,0,0,0.18));
      animation: luffyJump 1.8s cubic-bezier(.68,-0.55,.27,1.55) infinite;
    }
    @keyframes luffyJump {
      0%, 100% { transform: translateY(0) scale(1); }
      20% { transform: translateY(-18px) scale(1.08,0.92); }
      40% { transform: translateY(-30px) scale(1.12,0.88); }
      50% { transform: translateY(-36px) scale(1.15,0.85); }
      60% { transform: translateY(-30px) scale(1.12,0.88); }
      80% { transform: translateY(-18px) scale(1.08,0.92); }
    }
    .onepiece-title {
      font-family: 'Luckiest Guy', cursive;
      font-size: 2.5rem;
      color: #fffbe7;
      text-shadow: 2px 4px 12px #1e3c72, 0 2px 0 #222;
      letter-spacing: 1px;
    }
  /* .onepiece-desc eliminada */
    .onepiece-bg {
      min-height: 100vh;
      background: linear-gradient(135deg, #f9d423 0%, #ff4e50 100%), radial-gradient(circle at 80% 20%, #fff70033 0%, #ff4e5000 70%), radial-gradient(circle at 20% 80%, #ffb34733 0%, #ff4e5000 70%);
      background-blend-mode: multiply;
      position: relative;
      overflow: hidden;
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
