import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'src/app/services/twitter.service';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css']
})
export class TwitterFeedComponent implements OnInit {

  public nameUser = "Cooking Chief";
  public twitterAt = "web_l3";

  constructor(private twittersService: TwitterService) { }

  ngOnInit(): void {
  }

}
