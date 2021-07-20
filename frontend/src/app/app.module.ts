
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
import { InsuredItemsComponent } from './consumer/pages/insured-items/insured-items.component';
import { InsuredItemComponent } from './consumer/pages/insured-item/insured-item.component';
import { BillingComponent } from './consumer/pages/billing/billing.component';
import { ProfileComponent } from './consumer/pages/profile/profile.component';
import { InsureComponent } from './consumer/pages/insure/insure.component';

// Insurer Side

// Everyone
import { RegisterComponent } from './everyone/pages/register/register.component';
import { LoginComponent } from './everyone/pages/login/login.component';
import { ErrorComponent } from './everyone/pages/error/error.component';

// ==================================================== Components go here ====================================================
// Everyone
import { NavbarComponent } from './everyone/components/navbar/navbar.component';
import { FooterComponent } from './everyone/components/footer/footer.component';


@NgModule({
	declarations: [
		AppComponent,
		InsureComponent,
		BillingComponent,
		InsuredItemsComponent,
		InsuredItemComponent,
		NotificationsComponent,
		LoginComponent,
		RegisterComponent,
		ErrorComponent,
		NavbarComponent,
		FooterComponent,
  		ProfileComponent,
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
