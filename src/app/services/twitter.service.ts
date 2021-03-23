import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tweet } from '../models/Tweet.models';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  private urlTweetLine:string = "../../assets/test_api/pizza.json";
  private tweets: Tweet[];

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
   return this.http.get<any>(this.urlTweetLine).subscribe( (response) => {
    let id = 1;
    response["hits"].forEach( (value) => {
      let tweet: Tweet = {
        id: id,
        nom: value.user.name,
        arobase:  value.user.screen_name,
        photoDeProfil: value.user.profile_image_url,
        texte: value.text,
        date: value.created_at,
        favs: value.favorite_count,
        rts: value.retweet_count,
      }
      id+= 1;
      this.tweets.push(tweet);
    })
    console.log("tweets : ");
    console.log(this.tweets);
   });
  }


  getTweetById(id:number){
    const unTweet = this.tweets.find((r)=>{
      return r.id === id;
    });
    return unTweet;
  }
}
