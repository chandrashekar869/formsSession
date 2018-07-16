import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators,ValidatorFn,FormBuilder,AbstractControl} from '@angular/forms';
import {Model} from '../model';

@Component({
  selector: 'app-reactive-fo',
  templateUrl: './reactive-fo.component.html',
  styleUrls: ['./reactive-fo.component.css']
})
export class ReactiveFoComponent implements OnInit {
  model:Model;
  Rform:FormGroup;
  constructor(formBuilder:FormBuilder) { 
  /*this.Rform=new FormGroup({
  fnameControl:new FormControl('',Validators.required),
  lnameControl:new FormControl('default last Name',Validators.required),
  emailControl:new FormControl('default email',Validators.required),
  passwordControl:new FormControl('default password',Validators.required)
 });*/
  this.Rform=formBuilder.group({
    fnameControl:['',Validators.required],
    lnameControl:['',[Validators.required,Validators.minLength(5)]],
    address:formBuilder.group({
      city:['',[Validators.required,,this.customValidator(2)]],
      state:['',Validators.required],
      pincode:['',[Validators.required]],
    }),
    emailControl:['',Validators.required],
    passwordControl:['',Validators.required]      
  });
  //   this.model=new Model();
  }

  ngOnInit() {

  }
  submit(){
    console.log( this.Rform);
    this.Rform.reset({
      fnameControl:'',
      lnameControl:'None'
    });
  }

  customValidator(divisor:number):ValidatorFn{
    return (control:AbstractControl):{[key:string]:any}|null=>{
      console.log(control);
      return (control.value.indexOf("Bangalore")!=-1?null:{'result':{value:control.value}});
    };
  }

}
