import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, 
    IonIcon, IonCol, IonRow, IonText, IonAvatar]
})
export class ProfilePage implements OnInit {

  @Input() userId: string = ''; // Passed in via route parameter or state
  selectedFile: File | null = null;
  previewPath: string | null = null;

  private readonly API_URL = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient,
    private actionSheetCtrl: ActionSheetController,
    private router: Router
  ) { }

  ngOnInit() {
    
    if (!this.userId) {
      const rawId = localStorage.getItem('uploadPro') || '';
      this.userId = JSON.parse(rawId);
      console.log(this.userId);
    }
  }
  
  // 1. SELECT THE FILE
  async selectSource() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Avatar Source',
      buttons: [
        {
          text: 'Take Photo',
          icon: 'camera',
          handler: () => this.captureImage(CameraSource.Camera),
        },
        {
          text: 'Choose from Gallery',
          icon: 'image',
          handler: () => this.captureImage(CameraSource.Photos),
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  async captureImage(source: CameraSource){
    try{

      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: source // Opens gallery instead of camera
      });

      if(image.webPath){
        this.previewPath = image.webPath;

        const res = (await fetch(image.webPath));
        const resBlob = await res.blob();
        const resFile = new File([resBlob],'avatar.jpg', { type: resBlob.type })

        this.selectedFile = resFile;
      }
    } catch (error) {
      // Handles permission denied, device unsupported, or runtime errors
      console.error('Failed to pick image from gallery:', error);
    }
  }

  updateAvatar(){
    if (!this.selectedFile) return;
    this.uploadUserAvatar(this.userId, this.selectedFile);
  }

  uploadUserAvatar(userId: string, file: File) {
    const formData = new FormData();
    formData.append('avatar', file, file.name);

    this.http.post(`${this.API_URL}/${userId}/avatar`, formData).subscribe(
      { next: (res: any) => {
          console.log('Uploaded successfully!', res);
          // Optional: Clear selection after success
          this.selectedFile = null;
          this.router.navigate(['/login']);
        },
        error: (err) => console.error('Upload failed:', err)
      });
  }

  skipForNow(){
    //avatarUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

    this.router.navigate(['/login']);

  }
}
