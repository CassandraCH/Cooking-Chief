import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/Tweet.models';
import { TwitterService } from 'src/app/services/twitter.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input('tweet') public unTweet: Tweet;

  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void { this.twitterService.getTwitterLine(); }
}
