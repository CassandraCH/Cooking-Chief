import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tweet } from '../models/Tweet.models';
import {Twitter} from 'twitter';
@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  
  //private urlTweetLine:string = "https://twitter.com/web_l3";
  private urlTweetLine:string = "http://localhost:5500/home_timeline"
  private tweets: Tweet[] = [];

  private tweetSubject = new Subject<Tweet[]>();

  constructor(private http: HttpClient) {}

  emitTweetSubject(){
    return this.tweetSubject.next([...this.tweets]);
  }

  estComplet(){
    return (this.tweets.length > 0);
  }

  getTweetUpdateListener(): Observable<Tweet[]>{
    return this.tweetSubject.asObservable();
  }


  getTwitterLine(){
   return this.http.get<any>(this.urlTweetLine);
  }


  getTweetById(id:number){
    const unTweet = this.tweets.find((r)=>{
      return r.id === id;
    });
    return unTweet;
  }
}
