import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.page.html',
  styleUrls: ['./chat-box.page.scss'],
  standalone: true,
      imports: [CommonModule, FormsModule],
})
export class ChatBoxPage implements OnInit {

  
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }
}

