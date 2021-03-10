import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { SectionsComponent } from './sections.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';

import { ReseauxSociauxComponent } from '../components/reseaux-sociaux/reseaux-sociaux.component';
import { InstaFeedComponent } from '../components/insta-feed/insta-feed.component';
import { TwitterFeedComponent } from '../components/twitter-feed/twitter-feed.component';
import { InstaPostComponent } from '../components/insta-post/insta-post.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { RecetteDuJourComponent } from '../recette-du-jour/recette-du-jour.component';
import { TweetComponent } from '../components/tweet/tweet.component';


@NgModule({
  declarations: [
    SectionsComponent,
    NgbdModalComponent,
    NgbdModalContent,
    RecetteDuJourComponent,
    ReseauxSociauxComponent,
    InstaFeedComponent,
    TwitterFeedComponent,
    InstaPostComponent,
    MainContentComponent,
    TweetComponent,
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module
  ],
  exports:[ SectionsComponent ]
})
export class SectionsModule { }
