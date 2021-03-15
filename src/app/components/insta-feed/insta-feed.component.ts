import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../../services/instagram.service';

@Component({
  selector: 'app-insta-feed',
  templateUrl: './insta-feed.component.html',
  styleUrls: ['./insta-feed.component.css']
})
export class InstaFeedComponent implements OnInit {

  constructor(private instagramService: InstagramService) { }

  ngOnInit(): void {
  }

}
