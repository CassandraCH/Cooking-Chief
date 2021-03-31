import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tweet } from '../models/Tweet.models';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  private urlTweetLine:string = "assets/test_api/tweetLine.json";
  private tweets: Tweet[] = [];

  private tweetSubject = new Subject<Tweet[]>();

  constructor(private http: HttpClient) {}

  emitTweetSubject(){
    // console.log("tweets : ");
    // console.log(this.tweets);
    return this.tweetSubject.next([...this.tweets]);
  }

  estComplet(){
    // console.log("tweets : ");
    // console.log(this.tweets);
    return (this.tweets.length > 0);
  }

  getTweetUpdateListener(): Observable<Tweet[]>{
    // console.log("tweets : ");
    // console.log(this.tweets);
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
