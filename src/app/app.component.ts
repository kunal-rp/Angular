import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  months = ["January", "Febuary","March","April"];
  isavaliable = true;

  componentProperty;
  constructor(private myservice : MyserviceService){}
  ngOnInit(){
    this.todayDate = this.myservice.showTodaysDate();
    console.log(this.myservice.serviceProperty);
    this.myservice.serviceProperty = "component created";
    this.componentProperty = this.myservice.serviceProperty;
  }

  myClickFunction(event){
    this.isavaliable = !this.isavaliable;
  }

  monthChanged(event) {
    this.myservice.log("month changed to "+ event.target.value);
  }

  todayDate ;




}
