import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.css']
})
export class ListExampleComponent implements OnInit {

  constructor() { }
  viewParent: number = 0;


  ngOnInit(): void {
  }
  onParent(select: number){
   this.viewParent = select; 
  }
}