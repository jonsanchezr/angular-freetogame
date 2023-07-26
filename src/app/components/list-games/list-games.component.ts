import { Component } from '@angular/core';
import { Game } from 'src/app/interfaces/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent {
  listGames: Game[] = [];
  loading: boolean = false;
  filterTitle: string = '';
  filterGenre: string = '';
  filterPlatform: string = '';

  constructor(private _gameService: GameService) { }

  ngOnInit(): void {
    this.getListGames()
  }

  getListGames() {
    this.loading = true;

    this._gameService.getListGames(this.filterGenre, this.filterPlatform).subscribe({
      next: (data: Game[]) => {
        let chunk = data
          .filter(game => game.title.toLowerCase().includes(this.filterTitle))
          .splice(0,12);
        this.listGames = chunk;
        this.loading = false;
      },
      error: (e) => {
        this.loading = false;
      }
    })
  }

  onFilterTitle(event: any) {
    this.filterTitle = event.target.value;
    this.getListGames();
  }

  onFilterGenre(event: any) {
    this.filterGenre = event.target.value;
    
    this.getListGames();
  }

  onFilterPlatform(event: any) {
    this.filterPlatform = event.target.value;
    
    this.getListGames();
  }
}
