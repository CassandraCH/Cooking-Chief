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
    this.tweetSubscription = this.twittersService.getTweetUpdateListener().subscribe(
      (data: Tweet[]) => {
        this.tabTweets = data
      }
    );

    this.twittersService.emitTweetSubject();
  }

  ngOnDestroy(){
    this.tweetSubscription.unsubscribe();
  }
}
