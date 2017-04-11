import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

	@Input('color') color : string;
	@Output('selectedColor') selectedColor = new EventEmitter<string>();

	title : string = 'ControlComponent';

	constructor() { }

	ngOnInit() {

	}

	changeColor(color : string){
		this.selectedColor.emit(color);
	}

}
