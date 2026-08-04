import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { addOutline, chevronForwardOutline, menuOutline } from 'ionicons/icons';
import { IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.page.html',
  styleUrls: ['./search-content.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon]
})
export class SearchContentPage implements OnInit {

  constructor() {
      addIcons({chevronForwardOutline, menuOutline, addOutline}) }

  ngOnInit() {
  }

}
