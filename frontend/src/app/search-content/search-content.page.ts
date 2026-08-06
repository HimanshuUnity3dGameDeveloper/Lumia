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
    imports: [CommonModule, FormsModule, IonContent, IonHeader, IonToolbar, IonButton, IonIcon, IonAvatar, 
      IonImg, IonRefresher, IonRefresherContent, IonTab, IonTabBar, IonTabButton, IonFooter, IonItem,
      IonSegment, IonSegmentButton, IonLabel],
})
export class SearchContentPage implements OnInit {

  activeTab: string = 'search';
  
  constructor(
    
    private router: Router
  ) {
      addIcons({'chevron-down-circle-outline': chevronDownCircleOutline, chevronForwardOutline, menuOutline, 
        addOutline , search, searchOutline, paperPlane, paperPlaneOutline, musicalNotesOutline, musicalNotes, 
        homeOutline, home, gridOutline, grid, syncOutline, sync, playOutline})
    }

  onChangeMode(tabName: string){
    this.activeTab = tabName; // Update active tab state
    switch(tabName){
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'reels':
        this.router.navigate(['/reels']);
        break;
      case 'chat':
        this.router.navigate(['/chat']);
        break;
      case 'search':
        this.router.navigate(['/search']);
        break;
      case 'profile':
        this.router.navigate(['/profile']);
        break;
    }
  }

  ngOnInit() {
  }

}
