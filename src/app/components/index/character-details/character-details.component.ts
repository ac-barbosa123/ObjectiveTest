import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/providers/api/index/index.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html'
})
export class CharacterDetailsComponent implements OnInit {

  constructor(public indexService: IndexService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe((pm) => {
      this.getCharactersDetails(pm.get('id'));
    });
  }
  characterDetails: any = [];
  comic: any = []
  
  getCharactersDetails(characterId: any) {
    this.indexService.findOne(characterId).subscribe(
      res => {
        this.characterDetails = Object(res).data.results[0];
      }
    );
  }



}
