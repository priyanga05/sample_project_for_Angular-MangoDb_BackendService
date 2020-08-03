import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'outin';

 userLoggedIn=true;

 greet(name:string){
  alert("Hello "+name);
  }
 
  constructor() {}

  ngOnInit() {
    
  }

  
}

