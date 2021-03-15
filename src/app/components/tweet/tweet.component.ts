import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'src/app/services/twitter.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void {
  }

}
