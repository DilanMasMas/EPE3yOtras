import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicia sesion con google',
      url: '/auth',
      icon: 'logo-googleplus'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Ciencia',
      url: '/ciencia',
      icon: 'flask'
    },
    {
      title: 'Deportes',
      url: '/deportes',
      icon: 'football'
    }
    ,
    {
      title: 'Internacional',
      url: '/internacional',
      icon: 'globe'
    },
    {
      title: 'Cultura',
      url: '/cultura',
      icon: 'logo-octocat'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  async signOut(){
    const alert = await this.alertController.create({
      header: 'Adios',
      message: 'Vuelva pronto :D',
      buttons: ['OK']
    });

    await alert.present();

    this.afAuth.auth.signOut().then(()=>{
      
    });
    
  }
}
