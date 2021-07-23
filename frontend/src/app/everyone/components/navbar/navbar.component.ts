import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	toggleSideNav(){
		let sidenav = document.getElementById('sidenav').classList;
		sidenav.contains('hide') ? sidenav.remove('hide') : sidenav.add('hide')
	}
}
