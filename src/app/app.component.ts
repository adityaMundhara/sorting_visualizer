import {
  Component, OnInit, ViewChild
} from '@angular/core';
import {
  MatSliderChange
} from '@angular/material/slider';
import {
  SortType
} from './models/sort-enum';
import { ValueColor } from './models/value-color';
import { SorterComponent } from './sorter/sorter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('sorter') sorter:SorterComponent;
  title = 'sorting';
  arraySize = 50;
  sortTypes = SortType;
  selectedSort: SortType = this.sortTypes.BUBBLE;
  sortArray: ValueColor[] = [];
  delay:string = '10';
  
  setType(stype: SortType): void {
    this.selectedSort =stype;
    this.sorter.callSorting(this.selectedSort);
  }

  generateArray(event ? : MatSliderChange) {
    if (event) {
      this.arraySize = event.value;
    }
    this.sortArray = [];
    for (let idx = 0; idx < this.arraySize; idx++) {
      this.sortArray.push({value:Math.floor(Math.random() * this.arraySize),color:'#9e9eb9'});
    }
  }
  ngOnInit():void{
    this.generateArray();
  }
}
