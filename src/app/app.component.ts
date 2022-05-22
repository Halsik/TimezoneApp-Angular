import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  removeclass() {
    document.querySelector(".europe")?.classList.remove("pressed")
    document.querySelector(".asia")?.classList.remove("pressed")
    document.querySelector(".africa")?.classList.remove("pressed")
    document.querySelector(".america")?.classList.remove("pressed")
    document.querySelector(".australia")?.classList.remove("pressed")
  }

  restartEurope() {
    this.removeclass()
    document.querySelector(".europe")?.classList.toggle("pressed")

  }
  restartAsia() {
    this.removeclass()
    document.querySelector(".asia")?.classList.toggle("pressed")

  }
  restartAmerica() {
    this.removeclass()
    document.querySelector(".america")?.classList.toggle("pressed")

  }
  restartAfrica() {
    this.removeclass()
    document.querySelector(".africa")?.classList.toggle("pressed")

  }
  restartAustralia() {
    this.removeclass()
    document.querySelector(".australia")?.classList.toggle("pressed")

  }

  europe() {
    let region = "europe"
    let area = "warsaw"
    this.http.get('http://worldtimeapi.org/api/timezone/' + region + "/" + area)
    .subscribe(Response =>{
      if(Response) {
        
      this.li=Response;
      this.lis = this.li.datetime
      
        let str = this.li.datetime
        let firstCut = str.substr(11, str.length);
        let newStr = firstCut
        newStr = firstCut.substr(0, newStr.length-13)
        this.lis = newStr;
        
        this.restartEurope()
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + region + ")"
      }});
  }
  asia() {
    let region = "Asia"
    let area = "tokyo"
     this.http.get('http://worldtimeapi.org/api/timezone/' + region + "/" + area)
    .subscribe(Response =>{
      if(Response) {
        
      this.li=Response;
      this.lis = this.li.datetime
      
        let str = this.li.datetime
        let firstCut = str.substr(11, str.length);
        let newStr = firstCut
        newStr = firstCut.substr(0, newStr.length-13)
        this.lis = newStr;
        document.querySelector(".asia")?.classList.toggle("pressed")
        this.restartAsia()
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + region + ")"
      }});
  }
  america() {
    let region = "america"
    let area = "new_york"
     this.http.get('http://worldtimeapi.org/api/timezone/' + region + "/" + area)
    .subscribe(Response =>{
      if(Response) {
        
      this.li=Response;
      this.lis = this.li.datetime
      
        let str = this.li.datetime
        let firstCut = str.substr(11, str.length);
        let newStr = firstCut
        newStr = firstCut.substr(0, newStr.length-13)
        this.lis = newStr;
        document.querySelector(".america")?.classList.toggle("pressed")
        this.restartAmerica()
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + region + ")"
      }});
  }
  africa() {
    let region = "africa"
    let area = "Cairo"
     this.http.get('http://worldtimeapi.org/api/timezone/' + region + "/" + area)
    .subscribe(Response =>{
      if(Response) {
        
      this.li=Response;
      this.lis = this.li.datetime
      
        let str = this.li.datetime
        let firstCut = str.substr(11, str.length);
        let newStr = firstCut
        newStr = firstCut.substr(0, newStr.length-13)
        this.lis = newStr;
        document.querySelector(".africa")?.classList.toggle("pressed")
        this.restartAfrica()
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + region + ")"
      }});
  }
  australia() {
    let region = "Australia"
    let area = "sydney"
     this.http.get('http://worldtimeapi.org/api/timezone/' + region + "/" + area)
    .subscribe(Response =>{
      if(Response) {
        
      this.li=Response;
      this.lis = this.li.datetime
      
        let str = this.li.datetime
        let firstCut = str.substr(11, str.length);
        let newStr = firstCut
        newStr = firstCut.substr(0, newStr.length-13)
        this.lis = newStr;
        document.querySelector(".australia")?.classList.toggle("pressed")
        this.restartAustralia()
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + region + ")"
      }});
  }
 
  li:any;
  lis = [];
 
  constructor(private http: HttpClient) {
      
  }
  ngOnInit(): void {

    
    
        this.europe()
        this.asia()
        this.africa()
        this.australia()
        this.america()
  }
  
}
