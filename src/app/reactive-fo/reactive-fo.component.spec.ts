import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { ReactiveFoComponent } from './reactive-fo.component';

describe('ReactiveFoComponent', () => {
  let component: ReactiveFoComponent;
  let fixture: ComponentFixture<ReactiveFoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFoComponent ],
      imports:[
        ReactiveFormsModule,
        BrowserModule
      ]
    })
    .compileComponents().then(()=>{
      fixture=TestBed.createComponent(ReactiveFoComponent);
      component=fixture.componentInstance;
      component.Rform.controls.emailControl.setValue("shekard.chandra869@gmail.com");
      component.Rform.controls.fnameControl.setValue("Chandra");
      component.Rform.controls.lnameControl.setValue("Shekar");
      component.Rform.controls.passwordControl.setValue("password");
      component.Rform.controls.address["controls"]["city"].setValue("Bangalore");
      component.Rform.controls.address["controls"]["state"].setValue("Karnataka");
      component.Rform.controls.address["controls"]["pincode"].setValue("560010");
      console.log(component.Rform);
    });
  }));


  it('button disabled or not', () => {
    fixture.detectChanges();
    const button=fixture.debugElement.nativeElement.querySelector('button');
    console.log("button Selector",button);
    expect(button.attributes.disabled).toBeFalsy();
  });
  it('if Submit called when validators fail',async(()=>{
    spyOn(component,'submit');
    fixture.detectChanges();
    const button=fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(()=>{
      expect(component.submit).toHaveBeenCalled();
    });
  }));
});
