import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {User} from '../user'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    form: FormGroup;
    userDetails=new User();
    loading = false;
    submitted = false;
    edu=false;
    registerConfirm=false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
      this.submitted=true;
      if(this.form.valid){
      console.log(this.form.value);
       this.userDetails=this.form.value;
       this.edu=true;
       console.log(this.userDetails);
      }else{
        console.log("The form has errors");
      }
    }
    showDetails(userData:User){
      this.userDetails=userData;
      console.log(this.userDetails);
      this.registerConfirm=true;
    }
}