import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonAvatar,IonRouterOutlet, IonApp, IonContent, IonIcon, IonImg, IonTabBar, IonTabButton, IonToolbar, 
  IonFooter} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, homeOutline, paperPlane, paperPlaneOutline, play, playOutline, search, searchOutline, sync, syncOutline} from 'ionicons/icons';

interface UserProfile {
  avatarUrl?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet, CommonModule, FormsModule, IonContent, IonToolbar, IonIcon, IonAvatar, 
    IonImg, IonTabBar, IonTabButton, IonFooter],
})
export class AppComponent implements OnInit {

  user: UserProfile | null = null;

  private readonly API_URL = 'http://localhost:3000';
  
  activeTab: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    addIcons({search, searchOutline, paperPlane, paperPlaneOutline, homeOutline, home, syncOutline, sync, play, 
      playOutline})
  }

  onChangeMode(tabName: string){
    this.activeTab = tabName;

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

  ngOnInit(){
    const rawId = localStorage.getItem('userID');
    const userId = rawId ? JSON.parse(rawId) : null;

    this.http.get<UserProfile>(`${this.API_URL}/user/${userId}`).subscribe(
      {
        next: (userData) => {
          this.user = userData;
          
        },
        error: (err) => {
          console.error('Failed to load user profile:', err);
        },
      }
    );
  }

  // 1. GET AVATAR...
  getUserAvatar(): string{
    if(this.user?.avatarUrl)
    {
      return `${this.API_URL}${this.user.avatarUrl}`;
    }
    // Default placeholder fallback
    return 'assets/images/default-avatar.png';
  }
}
