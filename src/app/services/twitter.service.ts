import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../models/Tweet.models';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  private urlTweetLine:string = "../../assets/test_api/pizza.json";
  private tweets: Tweet[];

  constructor(private http: HttpClient) {}

  getTwitterLine(){
   return this.http.get<Tweet>(this.urlTweetLine).subscribe( (response) => {
    let id = 1;
    response["hits"].forEach( (value) => {
      let tweet: Tweet = {
        id: id,
        nom: value.user.name,
        arobase:  value.user.screen_name,
        photoDeProfil: value.user.profile_image_url,
        texte: value.text,
        date: value.created_at,
      }
      id+= 1;
      this.tweets.push(tweet);
    })
    console.log("recettes : ");
    console.log(this.tweets);
   });
  }
}
