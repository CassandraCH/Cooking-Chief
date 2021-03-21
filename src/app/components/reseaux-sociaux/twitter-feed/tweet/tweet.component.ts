import { Component, Input, OnInit } from '@angular/core';
import { TwitterService } from 'src/app/services/twitter.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  public tweets = []
  @Input('twitterName') public nom;
  @Input('arobase') public at;
  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void {
    /**this.twitterService.getTwitterLine().subscribe(
      (data: any) => {
      console.log(data);
      this.tweets = data;
    })**/
  }

}
