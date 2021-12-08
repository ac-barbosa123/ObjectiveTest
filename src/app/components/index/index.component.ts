import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/providers/api/index/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  pageStart: number = 1;
  constructor(public indexService: IndexService) { }

  ngOnInit() {
   this.getAllCharacters()

  }

  characters: any = [];
  series: any = []
  events: any = []
  searchText: any;

    getAllCharacters() {
       this.indexService.getCharacters().subscribe(
      res => {
        this.characters = Object(res).data.results
      }
    )
    ;
  }
}
