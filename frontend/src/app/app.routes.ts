import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./loginandregistration/loginandregistration.page').then( m => m.LoginandregistrationPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'upload-avatar',
    loadComponent: () => import('./upload-avatar/upload-avatar.page').then( m => m.UploadAvatarPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./search-content/search-content.page').then( m => m.SearchContentPage)
  },
  {
    path: 'chat-box',
    loadComponent: () => import('./chat-box/chat-box.page').then( m => m.ChatBoxPage)
  },
  {
    path: 'show-reels',
    loadComponent: () => import('./show-reels/show-reels.page').then( m => m.ShowReelsPage)
  },
];
