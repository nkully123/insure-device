import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ==================================================== Pages go here ====================================================
// Consumer Side
import { NotificationsComponent } from './consumer/pages/notifications/notifications.component';
import { BillingComponent } from './consumer/pages/billing/billing.component';
import { InsureComponent } from './consumer/pages/insure/insure.component';

// Insurer Side
import { DashboardComponent } from './insurer/pages/dashboard/dashboard.component';
import { ClientsComponent } from './insurer/pages/clients/clients.component';
import { ReportsComponent } from './insurer/pages/reports/reports.component';
import { OffersComponent } from './insurer/pages/offers/offers.component';

// Everyone
import { InsuredItemsComponent } from './everyone/pages/insured-items/insured-items.component';
import { RegisterComponent } from './everyone/pages/register/register.component';
import { ProfileComponent } from './consumer/pages/profile/profile.component';
import { LoginComponent } from './everyone/pages/login/login.component';
import { ErrorComponent } from './everyone/pages/error/error.component';


const routes: Routes = [
	// Consumer Side
	{ path: 'notifications', component: NotificationsComponent },
	{ path: 'insured', component: InsuredItemsComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'billing', component: BillingComponent },
	{ path: 'insure', component: InsureComponent },

	// Insurer Side
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'reports', component: ReportsComponent },
	{ path: 'clients', component: ClientsComponent },
	{ path: 'offers', component: OffersComponent },

	// Everyone
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'login' },

	{ path: 'page-not-found', component: ErrorComponent },
	{ path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
