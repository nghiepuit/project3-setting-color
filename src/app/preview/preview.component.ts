import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

	@Input('color') color : string;

	title : string = 'PreviewComponent';

	constructor() { }

	ngOnInit() {
	}

}
