import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class LayoutComponent {
  username = 'Chanthis';

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToRaiseTicket() {
    this.router.navigate(['/TicketRise']);
  }

  goToReports() {
    this.router.navigate(['/reports']);
  }
}
