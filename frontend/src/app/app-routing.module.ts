import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ==================================================== Pages go here ====================================================


const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '' },

	{ path: '**', redirectTo: '/404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
