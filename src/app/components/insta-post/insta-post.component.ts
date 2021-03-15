import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../../services/instagram.service';

@Component({
  selector: 'app-insta-post',
  templateUrl: './insta-post.component.html',
  styleUrls: ['./insta-post.component.css']
})
export class InstaPostComponent implements OnInit {

  constructor(private instagramService: InstagramService) { }

  ngOnInit(): void {
  }

}
