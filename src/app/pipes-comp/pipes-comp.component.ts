import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-comp',
  templateUrl: './pipes-comp.component.html',
  styleUrls: ['./pipes-comp.component.css']
})
export class PipesCompComponent implements OnInit {

  constructor() { }
  conditionForI8n={'Male':'He','Female':'She'};
  str:string='Male';
  ngOnInit() {
  }

}
