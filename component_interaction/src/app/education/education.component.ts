import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  eduForm:FormGroup;
  submitted=false;
  complete=false;
  @Input() userData:User;
  @Output()sendData= new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.userData);
    this.eduForm = this.formBuilder.group({
      collegeName: ['', Validators.required],
      passesdOut: ['', Validators.required],
      score: ['', Validators.required],
  });
  }
  onSubmit() {
    this.submitted=true;
    if(this.eduForm.valid){
    console.log(this.eduForm.value);
     this.userData.education=this.eduForm.value;
     this.sendData.emit(this.userData);
     this.complete=true;
     console.log(this.userData);
    }else{
      console.log("The form has errors");
    }
  }
}
