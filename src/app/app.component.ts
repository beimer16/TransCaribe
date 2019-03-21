import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Configuracion',
      url: '/configuracion',
      icon: 'settings'
    }
    ,
    {
      title: 'Favoritos',
      url: '/favorito',
      icon: 'heart'
    }
    ,
    {
      title: 'Ayuda',
      url: '/ayuda',
      icon: 'help-circle'
    }
    ,
    {
      title: 'Acerca de',
      url: '/acercade',
      icon: 'book'
    }
    ,
    {
      title: 'Terminos de uso',
      url: '/terminouso',
      icon: 'paper'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
