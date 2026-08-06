import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { chevronDownCircleOutline, chevronForwardOutline} from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-reels',
  templateUrl: './show-reels.page.html',
  styleUrls: ['./show-reels.page.scss'],
  standalone: true,
    imports: [CommonModule, FormsModule],
})
export class ShowReelsPage implements OnInit {

  constructor(
    
    private router: Router
  ) {
      addIcons({'chevron-down-circle-outline': chevronDownCircleOutline, chevronForwardOutline})
    }

  ngOnInit() {
    
  }
}

