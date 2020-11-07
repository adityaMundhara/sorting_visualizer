import {
  Component, OnInit, ViewChild
} from '@angular/core';
import {
  MatSliderChange
} from '@angular/material/slider';
import {
  SortType
} from './models/sort-enum';
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
  sortArray: number[] = [];
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
      this.sortArray.push(Math.floor(Math.random() * this.arraySize));
    }
  }
  ngOnInit():void{
    this.generateArray();
  }
}
