import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tweet } from '../models/Tweet.models';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  // url pour l'appel de l'api (se fait dans le back-end en local)
  private urlTweetLine:string = "http://localhost:5500/home_timeline"

  // tableau des tweets
  private tweets: Tweet[] = [];

  private tweetSubject = new Subject<Tweet[]>();

  constructor(private http: HttpClient) {}

  //Fonction permettant de retourner une copie du tableau de tweets via ...
  emitTweetSubject(){ return this.tweetSubject.next([...this.tweets]); }

  //Fonction permettant de savoir si le tableau de tweets n'est pas vide
  estComplet(){ return (this.tweets.length > 0); }

  //Fonction renvoyant un observable sur le subject à observer ( dans le cas présent le tableau des tweets)
  getTweetUpdateListener(): Observable<Tweet[]>{ return this.tweetSubject.asObservable(); }

  //Fonction renvoyant le tableau de tweets à partir d'une requête http à l'url : http://localhost:5500/home_timeline
  getTwitterLine(){ return this.http.get<any>(this.urlTweetLine); }
}
