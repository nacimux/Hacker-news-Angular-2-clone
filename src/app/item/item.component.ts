import { Component, Input, OnInit } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item;
  constructor(private _hackernewsAPI : HackernewsApiService) { }

  ngOnInit() {
     this._hackernewsAPI.fetchItem(this.itemID)
     .subscribe(
       item => this.item = item,
       error => console.log('Could not load item' + this.itemID)
     );

  }
  

}