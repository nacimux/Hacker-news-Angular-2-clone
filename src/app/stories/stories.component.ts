import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  items: number[];

  constructor(private _hackernewsAPI : HackernewsApiService ) { 
    this.items = Array(30).fill().map((x,i)=>i);
  }

  ngOnInit() {
    this._hackernewsAPI.fetchStories()
    .subscribe(
      item => this.items = item,
      error => console.log('error when fetching data')
    );
  }
}