import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ==================================================== Pages go here ====================================================
// Consumer Side
import { NotificationsComponent } from './consumer/pages/notifications/notifications.component';
import { InsuredItemsComponent } from './consumer/pages/insured-items/insured-items.component';
import { InsuredItemComponent } from './consumer/pages/insured-item/insured-item.component';
import { BillingComponent } from './consumer/pages/billing/billing.component';
import { ProfileComponent } from './consumer/pages/profile/profile.component';
import { InsureComponent } from './consumer/pages/insure/insure.component';

// Everyone
import { RegisterComponent } from './everyone/pages/register/register.component';
import { LoginComponent } from './everyone/pages/login/login.component';
import { ErrorComponent } from './everyone/pages/error/error.component';


const routes: Routes = [
	// Consumer Side
	{ path: 'notifications', component: NotificationsComponent },
	{ path: 'insured/:id', component: InsuredItemComponent },
	{ path: 'insured', component: InsuredItemsComponent },
	{ path: 'billing', component: BillingComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'insure', component: InsureComponent },

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
