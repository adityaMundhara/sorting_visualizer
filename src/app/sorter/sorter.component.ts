import { Component, Input} from '@angular/core';
import { SortType } from '../models/sort-enum';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss']
})
export class SorterComponent{
  @Input() sortArray:number[];

  constructor() { }
  callSorting(sortType:SortType){
    switch(sortType){
      case SortType.BUBBLE : this.bubbleSort();
      break;
      case  SortType.MERGE : this.mergeSort(0,this.sortArray.length-1);
      break;
    }
  }
  async bubbleSort(){
      let l = this.sortArray.length;

      for(let i=0;i<l-1;i++){
          for(let j=0;j<l-i-1;j++){
            await this.delay(10)
            if(this.sortArray[j]>this.sortArray[j+1]){
              this.sortArray[j] = this.sortArray[j+1] + this.sortArray[j];
              this.sortArray[j+1] = this.sortArray[j] - this.sortArray[j+1];
              this.sortArray[j] = this.sortArray[j] - this.sortArray[j+1];
            }
          }
      }
  
  }

  async mergeSort(start:number,end:number){
        if(start<end){
            let mid = Math.floor((start + end)/2);
            await this.mergeSort(start,mid);
            await this.mergeSort(mid+1,end);
            await this.merge(start,mid,end);
        }
  }
  
  async merge(start:number,mid:number,end:number){
      let startArray = this.sortArray.slice(start,mid+1);
      let endArray = this.sortArray.slice(mid+1,end+1);
      let i=0,j=0;
      await this.delay(15);  
      while(i<startArray.length && j<endArray.length){
            if(startArray[i]<=endArray[j]){
                this.sortArray[start] = startArray[i];
                i++;
            }
            else{
              this.sortArray[start] = endArray[j];
              j++; 
            }
            start++;
      }
      while(i<startArray.length){
        this.sortArray[start] = startArray[i];
        i++;
        start++;
      }
      while(j<endArray.length){
        this.sortArray[start] = endArray[j];
        j++; 
        start++;
      }

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
