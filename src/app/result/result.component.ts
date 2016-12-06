import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'result',
  template: `
  	<div class="box">Result: {{value | currency: 'COP'}}</div>
  `,
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
	@Input() value: number;

	constructor() { }

	ngOnInit() {
	}

}
