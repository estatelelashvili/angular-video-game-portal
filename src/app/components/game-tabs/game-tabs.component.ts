import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
@Input() game: Game = {
  id: 0,
  background_image: '',
  name: '',
  released: '',
  metacritic_url: '',
  website: '',
  description: '',
  metacritic: 0,
  genres: [],
  parent_platforms: [],
  publishers: [],
  ratings: [],
  screenshots: [],
  trailers: [],
};
  constructor() { }

  ngOnInit(): void {
  }

}
