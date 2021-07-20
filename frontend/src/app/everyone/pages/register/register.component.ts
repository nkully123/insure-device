import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	constructor() { }

	registerForm: any = new FormGroup({
		'full_name': new FormControl(''),
		'email': new FormControl(''),
		'identity_number': new FormControl(''),
		'phone_number': new FormControl(''),
		'company_name': new FormControl(''),
		'password': new FormControl(''),
		'confirm_password': new FormControl(''),
		"address": new FormControl(''),
		"city": new FormControl(''),
		"zip_code": new FormControl(''),
		'insurerRepresentetive': new FormControl(false)
	})

	// genders = [
	// 	{ value: 'male', label: 'Male' },
	// 	{ value: 'female', label: 'Female' },
	// 	{ value: 'other', label: 'Other' },
	// ];

	ngOnInit(): void {
		
	}

	// View form according to a user based on the checkbox
	changeInsurerRepresentetive(e: any){
		let a__consumer = document.getElementById('a__consumer').classList;
		let an__insurer = document.getElementById('an__insurer').classList;
		let insurer = e.checked;

		if (insurer) {
			a__consumer.remove('show');
			a__consumer.add('hide');

			an__insurer.remove('hide');
			an__insurer.add('show');
			return
		}

		a__consumer.remove('hide');
		a__consumer.add('show');

		an__insurer.remove('show');
		an__insurer.add('hide');
	}

	register(){
		console.log(this.registerForm.value);
	}
}
