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
  selector: 'app-search-content',
  templateUrl: './search-content.page.html',
  styleUrls: ['./search-content.page.scss'],
  standalone: true,
    imports: [CommonModule, FormsModule],
})
export class SearchContentPage implements OnInit {
  
  constructor(
    
    private router: Router
  ) {
      addIcons({})
    }

  ngOnInit() {} 
}

