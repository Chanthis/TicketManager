import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,          // ✅ must be standalone
  imports: [RouterOutlet],   // ✅ only RouterOutlet needed here
  template: `<router-outlet></router-outlet>`, // ✅ inline template
  styleUrls: ['./app.css']   // ✅ correct property name (plural)
})
export class App {
  protected readonly title = signal('TaskManager');
}
