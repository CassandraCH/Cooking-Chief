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

import { ReseauxSociauxComponent } from '../reseaux-sociaux/reseaux-sociaux.component';
import { TwitterComponent } from '../twitter/twitter.component';
import { InstagramComponent } from '../instagram/instagram.component';
import { RecetteDetailleeComponent } from '../recette-detaillee/recette-detaillee.component';
import { RecetteDuJourComponent } from '../recette-du-jour/recette-du-jour.component';

@NgModule({
  declarations: [
    SectionsComponent,
    NgbdModalComponent,
    NgbdModalContent,
    RecetteDetailleeComponent,
    RecetteDuJourComponent,
    ReseauxSociauxComponent,
    TwitterComponent,
    InstagramComponent
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
