import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-show-reels',
  templateUrl: './show-reels.page.html',
  styleUrls: ['./show-reels.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ShowReelsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
