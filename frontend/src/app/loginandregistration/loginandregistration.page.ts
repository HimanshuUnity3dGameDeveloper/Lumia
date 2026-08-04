import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonInput, IonButton, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { addIcons } from 'ionicons';
import { person, lockClosed, mail, personCircle } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './loginandregistration.page.html',
  styleUrls: ['./loginandregistration.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule,
    FormsModule, IonItem, IonInput,
    IonButton, IonLabel, IonIcon]
})

export class LoginandregistrationPage implements OnInit {

  isLogin = true;

  loginPortal={identity:'', password:''}
  register={fullName:'', email:'', username:'', password:'' }

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { // 💡 REQUIRED: Register the icon so Ionic knows how to render it
    addIcons({ person, lockClosed, mail, personCircle });
  }


  ngOnInit() {
  }

  toggleAuthMode(){
    this.isLogin=!this.isLogin;
  }

  loginHandler(form: any){
    if(form.valid){
      this.authService.login(this.loginPortal.identity.trim(), this.loginPortal.password).subscribe({
        next: (user) => {
          alert(`Welcome back, ${user.username}!`);
          localStorage.setItem('userId', JSON.stringify(user._id));
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          alert('Invalid username and password');
        }
      });
    }
  }

  registrationHandler(form: any){
    if (form.valid) {
      const payload = {
        fullname: this.register.fullName.trim(),
        username: this.register.username.trim(),
        email: this.register.email.trim(),
        password: this.register.password
      };

      this.authService.register(payload).subscribe({
        next: (user) => {
          alert('Account created successfully! Please Upload your profile picture.');
          localStorage.setItem('uploadPro', JSON.stringify(user._id));
          
          this.router.navigate(['/upload-avatar']);
          this.toggleAuthMode();
        },
        error: (err) => {
          // Shows the exact error message from NestJS (e.g. "Username or Email already exists.")
          const serverError = err.error?.message || 'Registration failed. Please try again.';
          alert(serverError);
        }
      });
    }
  }

  continueWithFB(){
    alert("FB in devlopment mode");
  }

  continueWithPhone(){
    alert("Still in development mode");
  }
}
