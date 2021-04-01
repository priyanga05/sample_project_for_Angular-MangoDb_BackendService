import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styles: []
})
export class SampleComponent implements OnInit {
  validatorForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {

    
    this.validatorForm = this.fb.group({
      age: ['', [Validators.required, this.AgeValidator]] //Custom validator is passed here.
    })
  }
   AgeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value > 18) {
      return { 'age': true };
    }
    return null;
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    
    console.log('age', form.value.age);
  }

  
}
