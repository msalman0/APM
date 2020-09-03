import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder, Validators, AbstractControl , FormArray } from '@angular/forms';
import { Customer } from './customer';

function validatePassword(c: AbstractControl) : {[key: string] : boolean } | null{
  const passwordControl = c.get('password');
  const confPasswordControl = c.get('confPassword');
  if(passwordControl.value === confPasswordControl.value){ 
    return null;
  }
  else {
    return {'match' : true};
  }
}

@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm : FormGroup;
  customer  = new Customer();

  get addressGroup(): FormArray{
    return <FormArray>this.customerForm.get('addressGroup');
  }

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName : ['',[Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required, Validators.minLength(3)]],
      passwordGroup: this.fb.group(
        {
        password: ['', Validators.required],
        confPassword : ['',Validators.required],
        }, {validator: validatePassword}
        ),
      email : ['',[Validators.required , Validators.email]],
      phone: '',
      notification : 'email',
      addressGroup: this.fb.array( [this.buildAddress ()]),
    })

    this.customerForm.get('notification').valueChanges.subscribe(
      value => this.setNotification(value)
    );
  }

  setNotification(notifyBy: string) : void {
    const phoneControl = this.customerForm.get('phone');
    if(notifyBy === 'phone'){
      phoneControl.setValidators(Validators.required);
    }
      else{
        phoneControl.clearValidators();
      }
    phoneControl.updateValueAndValidity();
  }

  addAddress():void{
    this.addressGroup.push(this.buildAddress());
  }

  
  buildAddress() : FormGroup{
    return this.fb.group(
      {
      city: ['', Validators.required],
      street : ['',Validators.required],
      zipCode: ['']
      }
      )
  }

}
