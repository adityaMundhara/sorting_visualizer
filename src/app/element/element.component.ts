import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit,OnChanges {
  @Input() sortArray:number[];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges){
    for(let change in changes){
      console.log(changes[change].currentValue);
    }
  }

}
