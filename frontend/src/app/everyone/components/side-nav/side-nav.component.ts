import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-side-nav',
	templateUrl: './side-nav.component.html',
	styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	toggleSideNav(){
		let sidenav = document.getElementById('sidenav').classList;
		sidenav.contains('hide') ? sidenav.remove('hide') : sidenav.add('hide')
	}

}
