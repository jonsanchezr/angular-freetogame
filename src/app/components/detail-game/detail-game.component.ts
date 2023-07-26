import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/interfaces/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.css']
})
export class DetailGameComponent {
  loading: boolean = false;
  game: Game = {
    id: 0,
    title: '',
    short_description: '',
    description: '',
    developer: '',
    freetogame_profile_url: '',
    game_url: '',
    genre: '',
    minimum_system_requirements: {
      graphics: '',
      memory: '',
      os: '',
      processor: '',
      storage: ''
    },
    platform: '',
    publisher: '',
    release_date: '',
    screenshots: [],
    status: '',
    thumbnail: ''
  };
  id: number;

  constructor(
    private _gameService: GameService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id) {
      this.getGame(this.id);
    }
  }

  getGame(id: number) {
    this.loading = true;
    this._gameService.getGame(id).subscribe({
      next: (data: Game) => {
        this.game = data;
        this.loading = false;
      },
      error: (e) => {
        this.loading = false;
      }
    })
  }
}
