import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private appUrl: string;
  private headers;
  
  constructor(private http: HttpClient) {
    this.appUrl = environment.endpoint;
    this.headers = new HttpHeaders()
            .set("X-RapidAPI-Key", environment.rapid_api_Key)
            .set("X-RapidAPI-Host", environment.rapid_api_host);
  }

  getListGames(filterGenre: string, filterPlatform: string): Observable<Game[]> {
    let params = new HttpParams();

    if (filterGenre) {
      params = params.set('category', filterGenre)
    }

    if (filterPlatform) {
      params = params.set('platform', filterPlatform)
    }

    return this.http.get<Game[]>(`${this.appUrl}/games`, {params, headers: this.headers});
  }

  getGame(id: number): Observable<Game> {
    let params = new HttpParams().set('id', id);
    return this.http.get<Game>(`${this.appUrl}/game`, {params, headers: this.headers});
  }
}
