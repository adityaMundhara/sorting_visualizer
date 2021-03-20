import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ValueColor } from '../models/value-color';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit,OnChanges {
  @Input() sortArray:ValueColor[];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges){

  }

}
