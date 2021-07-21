
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ==================================================== Pages go here ====================================================
// Consumer Side
import { NotificationsComponent } from './consumer/pages/notifications/notifications.component';
import { BillingComponent } from './consumer/pages/billing/billing.component';
import { InsureComponent } from './consumer/pages/insure/insure.component';
import { ProfileComponent } from './consumer/pages/profile/profile.component';

// Insurer Side
import { DashboardComponent } from './insurer/pages/dashboard/dashboard.component';
import { ClientsComponent } from './insurer/pages/clients/clients.component';
import { ReportsComponent } from './insurer/pages/reports/reports.component';
import { OffersComponent } from './insurer/pages/offers/offers.component';

// Everyone
import { InsuredItemsComponent } from './everyone/pages/insured-items/insured-items.component';
import { RegisterComponent } from './everyone/pages/register/register.component';
import { LoginComponent } from './everyone/pages/login/login.component';
import { ErrorComponent } from './everyone/pages/error/error.component';

// ==================================================== Components go here ====================================================
// Everyone
import { SideNavComponent } from './everyone/components/side-nav/side-nav.component';
import { NavbarComponent } from './everyone/components/navbar/navbar.component';
import { FooterComponent } from './everyone/components/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		InsureComponent,
		BillingComponent,
		InsuredItemsComponent,
		NotificationsComponent,
		LoginComponent,
		RegisterComponent,
		ErrorComponent,
		NavbarComponent,
		FooterComponent,
  		ProfileComponent,
    	ClientsComponent,
		DashboardComponent,
		OffersComponent,
		ReportsComponent,
		SideNavComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MDBBootstrapModule.forRoot(),
		ReactiveFormsModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
