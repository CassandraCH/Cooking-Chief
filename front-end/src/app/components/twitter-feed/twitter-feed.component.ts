import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tweet } from 'src/app/models/Tweet.models';
import { TwitterService } from 'src/app/services/twitter.service';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css']
})
export class TwitterFeedComponent implements OnInit {

  public nameUser = "Cooking Chief";
  public twitterAt = "web_l3";

  public tabTweets: Tweet[] = [];
  public tweetSubscription: Subscription;

  constructor(private twittersService: TwitterService) { }

  ngOnInit(): void {
    this.twittersService.getTwitterLine().subscribe( (response) => {
      let id = 1;
      response.data.forEach( (value) => {
        let tweet: Tweet = {
          id: id,
          nom: value.user.name,
          arobase:  value.user.screen_name,
          photoDeProfil: value.user.profile_image_url,
          texte: value.text,
          favs: value.favorite_count,
          rts: value.retweet_count,
        }

        // console.log(tweet);
        // Limiter à 6 tweets pour l'affichage
        if(id <= 6){
          this.tabTweets.push(tweet);
        }
        id+= 1;
      })
     });
     this.twittersService.emitTweetSubject();
  }
}
