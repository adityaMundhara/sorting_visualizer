import { Component, Input } from '@angular/core';
import { SortType } from '../models/sort-enum';
import { ValueColor } from '../models/value-color';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss']
})
export class SorterComponent {
  @Input() sortArray: ValueColor[];
@Input() delayTimer:string;
disable:boolean=false;
  constructor() { }
  async callSorting(sortType: SortType) {
    switch (sortType) {
      case SortType.BUBBLE: await this.bubbleSort();
        break;
      case SortType.MERGE: await this.mergeSort(0, this.sortArray.length - 1);
        break;
    }
  }
  async bubbleSort() {
    this.disable=true;
    let l = this.sortArray.length;
    for (let i = 0; i < l - 1; i++) {
      for (let j = 0; j < l - i - 1; j++) {
        this.changeColor([this.sortArray[j], this.sortArray[j + 1]]);
        await this.delay();
        if (this.sortArray[j].value > this.sortArray[j + 1].value) {
          this.sortArray[j].value = this.sortArray[j + 1].value + this.sortArray[j].value;
          this.sortArray[j + 1].value = this.sortArray[j].value - this.sortArray[j + 1].value;
          this.sortArray[j].value = this.sortArray[j].value - this.sortArray[j + 1].value;
        }
        this.setColor([this.sortArray[j], this.sortArray[j + 1]],"#9e9eb9");
      }
    }
    for(let i=0;i<l;i++){
      await this.delay(2);
      this.setColor([this.sortArray[i]],"#33b92b");
    }
    this.disable=false;
  }

  changeColor(changeColorValues: ValueColor[]) {
    changeColorValues.forEach((value) => value.color = 'red');
  }

  setColor(changeColorValues: ValueColor[],color:string) {
    changeColorValues.forEach((value) => value.color = color);
  }
  async mergeSort(start: number, end: number) {
    this.disable=true;

    if (start < end) {
      let mid = Math.floor((start + end) / 2);
      await this.mergeSort(start, mid);
      await this.mergeSort(mid + 1, end);
      await this.merge(start, mid, end);
    }
    this.disable=false;

  }

  async merge(start: number, mid: number, end: number) {
    let startArray = this.sortArray.slice(start, mid + 1);
    let endArray = this.sortArray.slice(mid + 1, end + 1);
    this.changeColor([startArray[0], endArray[0]]);
    let i = 0, j = 0;
    await this.delay();
    while (i < startArray.length && j < endArray.length) {
      
      if (startArray[i].value <= endArray[j].value) {
        this.sortArray[start] = startArray[i];
        i++;
      }
      else {
        this.sortArray[start] = endArray[j];
        j++;
      }
      start++;
    }

    while (i < startArray.length) {
      this.sortArray[start] = startArray[i];
      i++;
      start++;

    }
    while (j < endArray.length) {
      this.sortArray[start] = endArray[j];
      j++;
      start++;
    }
   this.setColor([...startArray, ...endArray],"#33b92b");
  }

  delay(time?:number) {
    return new Promise(resolve => setTimeout(resolve, time ? time :parseInt(this.delayTimer)));
  }
}
