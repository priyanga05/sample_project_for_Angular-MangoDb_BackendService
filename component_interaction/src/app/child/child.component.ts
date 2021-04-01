import { Component, OnInit ,EventEmitter, Output,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  name="Yugapriya";
  @Output()greetEvent= new EventEmitter();
  @Input()loggedIn:boolean;
  constructor() { }
 

  ngOnInit(): void {
  }
  callParentGreet(){
     this.greetEvent.emit(this.name);
  }

}
