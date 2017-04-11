import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title : string = 'AppComponent';

	resetColor : string = 'yellow';

	changeColor($event){
		this.resetColor = $event;
	}

}
