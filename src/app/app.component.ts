import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  months = ["January", "Febuary","March","April"];
  isavaliable = true;

  myClickFunction(event){
    this.isavaliable = !this.isavaliable;
  }

  monthChanged(event) {
    console.log("month changed")
    console.log(event)
  }

  monthSelected(){
    console.log("month selected")
  }

  todayDate = new Date();
  jsonVal = {name:'Rox',age:25,address:{a1:'Mumbai',a2:'Bombay'}};




}
