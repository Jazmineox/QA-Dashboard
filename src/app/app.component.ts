import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'QA-dashboard2';
  sideBarOpen = true;

  ngOnInit(): void {}

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  
}
