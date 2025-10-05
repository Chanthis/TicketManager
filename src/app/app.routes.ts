import { Routes } from '@angular/router';
import { LoginPage } from './Login/login-page/login-page';
import { DashboardComponents } from './Dashboard/dashboard-components/dashboard-components';
import { UserTicket } from './Tickets/user-ticket/user-ticket';
import { LayoutComponent } from './layout/layoutcomponent/layout';

export const routes: Routes = [
    { path: '', component: LoginPage },
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardComponents },
          { path: 'TicketRise', component: UserTicket },
        ]
      }
];
