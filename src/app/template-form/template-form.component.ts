import { Component, OnInit } from '@angular/core';
import {Model} from '../model';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model:object;
  pattern:RegExp;
  constructor() {
    this.model=new Model('','','','','');
    this.pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  ngOnInit() {
  }
  submit(form:NgForm){
    console.log(form);
    form.reset();
  }

}
