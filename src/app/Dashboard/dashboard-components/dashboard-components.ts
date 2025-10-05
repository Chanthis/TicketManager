import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-components.html',
  styleUrl: './dashboard-components.css'
})
export class DashboardComponents {
  username = 'John Doe'; // you can replace with dynamic user later

  constructor(private router: Router) {}


}
