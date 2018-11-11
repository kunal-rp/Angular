import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  serviceProperty = "This is a Myservice property. ";
  constructor() { }
  showTodaysDate(){
    return new Date();
  }
  log(string){
    console.log(string);
  }
  error(string){
    console.alert("An error has occured: "+string);
  }
}
