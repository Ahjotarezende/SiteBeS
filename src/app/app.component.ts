import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    NgIf,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  mostraHeader = false;
  mostraOpcoesMobile = false;

  @HostListener('window:scroll') onScroll() {
    if (Math.round(window.scrollY) > 450) {
      this.mostraHeader = true;
    } else {
      this.mostraHeader = false;
    }
  }

  viewMobileOptions() {
    this.mostraOpcoesMobile = !this.mostraOpcoesMobile;
  }
}
