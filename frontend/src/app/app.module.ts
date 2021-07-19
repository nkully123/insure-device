
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ==================================================== Pages go here ====================================================

// ==================================================== Components go here ====================================================


@NgModule({
	declarations: [
		AppComponent,
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
