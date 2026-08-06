import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { addOutline, chevronDownCircleOutline, chevronForwardOutline, grid, gridOutline, home, homeOutline, menuOutline, musicalNotes, musicalNotesOutline, paperPlane, paperPlaneOutline, 
  playOutline, search, searchOutline, sync, syncOutline} from 'ionicons/icons';
import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonImg, IonRefresher, IonRefresherContent, 
  IonTabBar, IonTabButton, IonTabs,  IonToolbar, IonFooter, IonTab, IonItem, IonSegment, IonSegmentButton,
  IonLabel} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, FormsModule],
})
export class HomePage implements OnInit {
  
  constructor(    
    private router: Router
  ){
    addIcons({'chevron-down-circle-outline': chevronDownCircleOutline, chevronForwardOutline, menuOutline, 
      addOutline , search, searchOutline, paperPlane, paperPlaneOutline, musicalNotesOutline, musicalNotes, 
      homeOutline, home, gridOutline, grid, syncOutline, sync, playOutline}
    )
  }

  ngOnInit() {
  } 
}

